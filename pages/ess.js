import Head from "next/head";
import { Container } from "../components/Container";
import { Components } from "../components/Framer/Components";

export default function ESS() {
  return (
    <>
      <Head>
        <title>TNG | ESS </title>
        <meta
          name="description"
          content="TNG stands for Technology for Next Generation. TNG focuses on creating innovations for future generations. TNG's advancements will aid in the sustainable growth and flourishing of humanity."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container>
        <Components.ReadySection className="width_100" />
      </Container>
    </>
  );
}