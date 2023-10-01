import Head from "next/head";
import { Container } from "../components/Container";
import { Components } from "../components/Framer/Components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Framer</title>
        <meta name="description" content="Modules" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container>
        <Components.Hero variant="home" className="width_100" />
        <Components.HomeIntroSection variant="one" className="width_100" />
        <Components.HomeIntroSection variant="two" className="width_100" />
      </Container>
    </>
  );
}
