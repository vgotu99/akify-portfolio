import {
  ATTR_KEY_MED,
  ATTR_KEY_SRC,
  BRIDGE_WEB_BASE_URL,
  UTM_KEY_MED,
  UTM_KEY_SRC,
} from '@/src/entities/install/lib/constants';

const getUtmParams = (): URLSearchParams => {
  const params = new URLSearchParams();
  if (typeof window === 'undefined' || !window.sessionStorage) {
    return params;
  }

  const src = sessionStorage.getItem(ATTR_KEY_SRC);
  const med = sessionStorage.getItem(ATTR_KEY_MED);

  if (!src || !med) {
    return params;
  }

  params.set(UTM_KEY_SRC, src);
  params.set(UTM_KEY_MED, med);

  return params;
};

const fetchGAClientId = async (): Promise<string | null> => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (typeof window === 'undefined' || !window.gtag || !gaId) {
    return null;
  }

  return new Promise((resolve) => {
    const timeoutId = setTimeout(() => {
      resolve(null);
    }, 1500);

    window.gtag!('get', gaId, 'client_id', (clientId: string) => {
      clearTimeout(timeoutId);
      resolve(clientId);
    });
  });
};

export const getBridgeUrl = async (targetPath: string): Promise<string> => {
  const params = getUtmParams();
  const clientId = await fetchGAClientId();

  if (clientId) {
    params.set('_cid', clientId);
  }

  const queryString = params.toString();
  return `${BRIDGE_WEB_BASE_URL}${targetPath}${queryString ? `?${queryString}` : ''}`;
};

export const resolveTargetPath = (pathname: string): string => {
  const merchandiseMatch = pathname.match(/^\/merchandise\/([^/?#]+)/);
  return merchandiseMatch ? `/merchandise/${merchandiseMatch[1]}` : '/install';
};
