import Head from "next/head";
import { Container } from "../../components/Container";
import { Components } from "../../components/Framer/Components";

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
      <Container>
        <Components.Hero variant="material" className="width_100" />
        <Components.MaterialTableSection className="width_100" />
      </Container>
    </>
  );
}
