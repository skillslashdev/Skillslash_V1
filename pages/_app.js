// import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/form.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={montserrat.className}>
        <Component {...pageProps} />
        <GoogleTagManager gtmId="GTM-WJVZHTB" />
      </main>
    </>
  );
}

export default MyApp;
