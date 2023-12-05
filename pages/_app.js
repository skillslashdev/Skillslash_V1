import "../styles/globals.css";
import "../styles/form.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Roboto } from "next/font/google";

// import Script from "next/script";
const roboto = Roboto({
  weight: ["100", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={roboto.className}>
        <Component {...pageProps} />
        <GoogleTagManager gtmId="GTM-WJVZHTB" />
      </main>
    </>
  );
}

export default MyApp;
