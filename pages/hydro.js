import Head from "next/head";
import { Container } from "../components/Container";
import { Components } from "../components/Framer/Components";
import { useRouter } from "next/router";

export default function Hydro() {
  return (
    <>
      <Head>
        <title>TNG | Hydro</title>
        <meta name="description" content="Magnet Pump System" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container>
        <Components.HydroIndexSection variant="tls" className="width_100" />
      </Container>
    </>
  );
}
