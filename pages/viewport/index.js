import Head from "next/head";
import { Container } from "../../components/Container";
import { Components } from "../../components/Framer/Components";
import { useRouter } from "next/router";

export default function Viewport() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Framer</title>
        <meta name="description" content="Modules" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container>
        <Components.ViewportNav
          jkOnClick={() => router.push("/viewport/jk")}
          jkrOnClick={() => router.push("/viewport/jkr")}
          nysOnClick={() => router.push("/viewport/nys")}
          tlsOnClick={() => router.push("/viewport/tls")}
          className="width_100"
        />
        <Components.ViewportIndexSection className="width_100" />
      </Container>
    </>
  );
}
