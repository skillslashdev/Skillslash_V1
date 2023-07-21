import "../styles/globals.css";
import "../styles/form.css";
import { Roboto } from "next/font/google";

import Script from "next/script";
const roboto = Roboto({
  weight: ["100", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-WJVZHTB`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-WJVZHTB', {
              page_path: window.location.pathname,
            });
                `}
      </Script> */}

      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
