import Header from "@/components/header";
import 'prismjs/themes/prism.css';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/match-braces/prism-match-braces.css';
import "@/styles/globals.css";
import '@/components/carousel/carousels2.css';
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [variant,setVariant]=useState<string|null>(null);

  useEffect(()=>{
    if(router.isReady){
      const v = router.query.variant;
      setVariant(Array.isArray(v)?v[0]:v||null);
    }
  },[router.isReady,router.query.variant]);

  const variantclass= variant==="2"?"theme-variant2":"theme-default";
  const includedRoutes = ["/"];
  if(includedRoutes.includes(router.pathname)){
    return <div className={`!min-h-screen !flex-col !flex !font-serif !text-puce !bg-base1 ${variantclass}`}>
    <Header />
    <Component {...pageProps} />

    </div>
    ;

  }
  return(
    <div className={`!min-h-screen !flex-col !flex !font-serif !text-puce !bg-base1 ${variantclass}`}>
 <Component {...pageProps} />
    </div>
  );
}
