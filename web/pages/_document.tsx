import Footer from "@/components/footer";
import Navbar from "@/components/nav-bar";
import "@/styles/globals.css";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="subpixel-antialiased !bg-base !text-puce !font-serif !flex !flex-col !min-h-screen">
      
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
