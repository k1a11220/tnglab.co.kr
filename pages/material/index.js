import Head from "next/head";
import { Container } from "../../components/Container";
import { Components } from "../../components/Framer/Components";
import Script from "next/script";

export default function Material() {
  return (
    <>
      <Head>
        <title>TNG | 특수금속</title>
        <meta
          name="description"
          content="티엔지에서는 아래와 같은 특수금속을 취급합니다. 하스텔로이 인코넬 니켈 크롬합금 기타 니켈"
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
        <Components.Hero variant="material" className="width_100" />
        <Components.MaterialTableSection className="width_100" />
      </Container>
    </>
  );
}
