import Head from "next/head";
import { Container } from "../../components/Container";
import { Components } from "../../components/Framer/Components";
import { useRouter } from "next/router";
import Script from "next/script";

export default function JK() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>TNG | Viewport JK</title>
        <meta name="description" content="Integral Viewport Series / JK" />
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
        <Components.ViewportNav
          jkOnClick={() => router.push("/viewport/jk")}
          jkrOnClick={() => router.push("/viewport/jkr")}
          nysOnClick={() => router.push("/viewport/nys")}
          tlsOnClick={() => router.push("/viewport/tls")}
          jk
          className="width_100"
        />
        <Components.ViewportDetailSection variant="jk" className="width_100" />
      </Container>
    </>
  );
}
