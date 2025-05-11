import Header from "@/components/header";
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
