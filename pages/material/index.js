import Head from "next/head";
import { Container } from "../../components/Container";
import { Components } from "../../components/Framer/Components";

export default function Material() {
  return (
    <>
      <Head>
        <title>Material</title>
        <meta name="description" content="Modules" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container>
        <Components.Hero variant="material" className="width_100" />
        <Components.MaterialTableSection className="width_100" />
      </Container>
    </>
  );
}
