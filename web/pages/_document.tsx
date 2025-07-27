import Footer from "@/components/footer";

import "@/styles/globals.css";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
        />
      <body className="subpixel-antialiased !bg-base1 !text-puce !font-serif !flex !flex-col !min-h-screen">
      {/*<Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js" strategy="afterInteractive" />
       
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js" strategy="afterInteractive" />
        */}
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
