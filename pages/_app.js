import { motion } from "framer-motion";
import Script from "next/script";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <div key={router.route}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
