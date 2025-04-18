import { greetings } from "@/lib/greetings";
import "../styles/globals.css";
import "../styles/loader.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    greetings();
  }, []);
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>{" "}
      <Component {...pageProps} />
    </>
  );
}
