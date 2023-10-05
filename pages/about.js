import Head from "next/head";
import { Container } from "../components/Container";
import { Components } from "../components/Framer/Components";
import Script from "next/script";
export default function Home() {
  return (
    <>
      <Head>
        <title>TNG | About </title>
        <meta
          name="description"
          content="TNG stands for Technology for Next Generation. TNG focuses on creating innovations for future generations. TNG's advancements will aid in the sustainable growth and flourishing of humanity."
        />
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
        <Components.Hero variant="about" className="width_100" />
        <Components.AboutMapSection className="width_100" />
      </Container>
    </>
  );
}
