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
import { IBM_Plex_Mono, JetBrains_Mono, Work_Sans, Inter, Geist_Mono, IBM_Plex_Serif, Zilla_Slab, Lora,Cormorant_Garamond } from 'next/font/google'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ibmplexmono',
  display: 'swap',
})
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-lora',
  display: 'swap',
})
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})
const zillaslab = Zilla_Slab({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-zillaslab',
  display: 'swap',
})
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ibmplexserif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets:['latin'],
  weight:['400','500','600','700'],
  variable:'--font-jetbrains-mono',
  display:'swap',
})
const geistmono = Geist_Mono({
  subsets:['latin'],
  weight:['400','500','600','700'],
  variable:'--font-geist-mono',
  display:'swap',
})

const worksans = Work_Sans({
  subsets:['latin'],
  weight:['400','500','600','700'],
  variable:'--font-work-sans',
  display:'swap',
})


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
    return <div className={`!min-h-screen !flex-col !flex !font-serif !text-puce !bg-base1 ${variantclass}   ${lora.variable} ${cormorant.variable} ${zillaslab.variable} ${inter.variable} ${ibmPlexSerif.variable} ${ibmPlexMono.variable} ${geistmono.variable} ${jetbrains.variable} ${worksans.variable}`}>
    <Header />
    <Component {...pageProps} />

    </div>
    ;

  }
  return(
    <div className={`!min-h-screen !flex-col !flex !font-serif !text-puce !bg-base1 ${variantclass}  ${zillaslab.variable}  ${lora.variable} ${cormorant.variable} ${ibmPlexSerif.variable} ${inter.variable} ${ibmPlexMono.variable} ${jetbrains.variable} ${geistmono.variable} ${worksans.variable}`}>
 <Component {...pageProps} />
    </div>
  );
}
