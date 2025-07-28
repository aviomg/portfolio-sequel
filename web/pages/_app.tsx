import Header from "@/components/header";
import 'prismjs/themes/prism.css';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/match-braces/prism-match-braces.css';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const includedRoutes = ["/"];
  if(includedRoutes.includes(router.pathname)){
    return <>
    <Header />
    <Component {...pageProps} />

    </>
    ;

  }
  return(
   <Component {...pageProps} />);
}
