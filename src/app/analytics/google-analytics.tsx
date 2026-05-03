import { GoogleAnalytics as ThirdPartyGoogleAnalytics } from '@next/third-parties/google';

export default function GoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const isGaTrackingEnabled = process.env.NODE_ENV === 'production' && GA_ID;

  return isGaTrackingEnabled && <ThirdPartyGoogleAnalytics gaId={GA_ID} />;
}
