import Script from 'next/script';

export default function UtmCapture() {
  return (
    <Script id="akify-attr-capture" strategy="beforeInteractive">
      {`
        (function () {
          var KEY_SRC = 'akify_attr_src';
          var KEY_MED = 'akify_attr_med';
          var url = new URL(window.location.href);
          var utmSrc = url.searchParams.get('utm_source');
          var utmMed = url.searchParams.get('utm_medium');
          
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
            if (/akify\\\\.io$/.test(refHost)) return;
            
            if (/(^|\\\\.)google\\\\./.test(refHost)) { 
              sessionStorage.setItem(KEY_SRC, 'google'); 
              sessionStorage.setItem(KEY_MED, 'organic'); 
            }
            else if (/naver\\\\.com$/.test(refHost)) { 
              sessionStorage.setItem(KEY_SRC, 'naver'); 
              sessionStorage.setItem(KEY_MED, 'organic'); 
            }
            else if (/daum\\\\.net$/.test(refHost)) { 
              sessionStorage.setItem(KEY_SRC, 'daum'); 
              sessionStorage.setItem(KEY_MED, 'organic'); 
            }
            else if (/bing\\\\.com$/.test(refHost)) { 
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
