import Head from "next/head";
import { Container } from "../components/Container";
import { Components } from "../components/Framer/Components";
import Script from "next/script";

export default function Hydro() {
  return (
    <>
      <Head>
        <title>TNG | Hydro</title>
        <meta name="description" content="Magnet Pump System" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11361899346" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'AW-11361899346');
        `}
      </Script>
      <Container>
        <Components.HydroIndexSection variant="tls" className="width_100" />
      </Container>
    </>
  );
}
