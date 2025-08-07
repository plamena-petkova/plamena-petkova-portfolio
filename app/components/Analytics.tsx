import Script from 'next/script';
import React from 'react';

const Analytics = () => {
    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=G-3DYL7GFMEG`} strategy='afterInteractive' />

            <Script id='google-analytics' strategy='afterInteractive' >{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3DYL7GFMEG');`}</Script>

        </>
    );
};

export default Analytics;