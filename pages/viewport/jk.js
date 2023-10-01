import Head from "next/head";
import { Container } from "../../components/Container";
import { Components } from "../../components/Framer/Components";
import { useRouter } from "next/router";

export default function JK() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>TNG | Viewport JK</title>
        <meta name="description" content="Integral Viewport Series / JK" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
