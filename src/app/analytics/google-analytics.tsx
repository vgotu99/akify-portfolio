import Script from 'next/script';
import { UTM_KEY_MED, UTM_KEY_SRC } from '@/src/entities/install/lib/constants';

export default function GoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const isGaTrackingEnabled = process.env.NODE_ENV === 'production' && GA_ID;

  if (!isGaTrackingEnabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());

        var params = new URLSearchParams(window.location.search);
        var cid = params.get('_cid');
        var src = params.get('${UTM_KEY_SRC}');
        var med = params.get('${UTM_KEY_MED}');
        var cnt = params.get('utm_content');
        var cmp = params.get('utm_campaign');
        var trm = params.get('utm_term');

        var config = {};
        if (cid) config.client_id = cid;
        if (src) config.campaign_source = src;
        if (med) config.campaign_medium = med;
        if (cnt) config.campaign_content = cnt;
        if (cmp) config.campaign_name = cmp;
        if (trm) config.campaign_term = trm;

        gtag('config', '${GA_ID}', config);
      `}</Script>
    </>
  );
}
