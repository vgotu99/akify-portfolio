import Script from 'next/script';
import {
  ATTR_KEY_MED,
  ATTR_KEY_SRC,
  UTM_KEY_MED,
  UTM_KEY_SRC,
} from '@/src/entities/install/lib/constants';

export default function UtmCapture() {
  return (
    <Script id="akify-attr-capture" strategy="beforeInteractive">
      {`
        (function () {
          var KEY_SRC = '${ATTR_KEY_SRC}';
          var KEY_MED = '${ATTR_KEY_MED}';
          var url = new URL(window.location.href);
          var utmSrc = url.searchParams.get('${UTM_KEY_SRC}');
          var utmMed = url.searchParams.get('${UTM_KEY_MED}');
          
          if (utmSrc) {
            sessionStorage.setItem(KEY_SRC, utmSrc);
            if (utmMed) sessionStorage.setItem(KEY_MED, utmMed);
            return;
          }
          
          if (sessionStorage.getItem(KEY_SRC)) return;
          
          var ref = document.referrer;
          if (!ref) return;
          
          try {
            var refHost = new URL(ref).hostname;
            if (/akify\\.io$/.test(refHost)) return;
            
            if (/(^|\\.)google\\./.test(refHost)) { 
              sessionStorage.setItem(KEY_SRC, 'google'); 
              sessionStorage.setItem(KEY_MED, 'organic'); 
            }
            else if (/naver\\.com$/.test(refHost)) { 
              sessionStorage.setItem(KEY_SRC, 'naver'); 
              sessionStorage.setItem(KEY_MED, 'organic'); 
            }
            else if (/daum\\.net$/.test(refHost)) { 
              sessionStorage.setItem(KEY_SRC, 'daum'); 
              sessionStorage.setItem(KEY_MED, 'organic'); 
            }
            else if (/bing\\.com$/.test(refHost)) { 
              sessionStorage.setItem(KEY_SRC, 'bing'); 
              sessionStorage.setItem(KEY_MED, 'organic'); 
            }
            else { 
              sessionStorage.setItem(KEY_SRC, refHost); 
              sessionStorage.setItem(KEY_MED, 'referral'); 
            }
          } catch (e) {}
        })();
      `}
    </Script>
  );
}
