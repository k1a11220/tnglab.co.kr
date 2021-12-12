import React from "react";
import Layout from "../../layout/layout";
import ProductLayout from "../../layout/productLayout";

import ProductIntro from "../../components/Product/ProductIntro";
import Advantage from "../../components/Product/Advantage";
import ProductImg from "../../components/Product/ProductImg";

import TLSIcon from "../../images/vacuum/TLS.svg";

import Img_1 from "../../images/vacuum/TLS_1.png";
import Img_2 from "../../images/vacuum/TLS_2.png";
import Img_3 from "../../images/vacuum/TLS_3.png";
import Img_4 from "../../images/vacuum/TLS_4.png";
import Img_5 from "../../images/vacuum/TLS_5.png";
import Img_6 from "../../images/vacuum/TLS_6.png";

import HERO from "../../images/vacuum/TLS.png";

const JKRPage = () => {
  const vcLinks = [
    {
      link: "/vacuum/tls",
      name: "TLS",
      icon: TLSIcon,
      key: 1,
    },
  ];

  const Advantages = [
    {
      title: "Compact Design",
    },
    {
      title:
        "It is easy to install the product by minimizing the space required for the shutter.",
    },
    {
      title: "Leak Free Design (Patented by TNG)",
    },
    {
      title:
        "There is no leakage due to the driving part because the shutter is driven using a magnet.",
    },
    {
      title: "Particle minimization design",
    },
    {
      title:
        "Since the sliding surface of the shutter is coated with high-density PTFE, the occurrence of particles is extremely low.",
    },
    {
      title: "No restrictions on installation direction",
    },
    {
      title:
        "Since the shutter is fixed to the magnet, vertical mounting is also possible. Horizontal mounting is recommended.",
    },
  ];

  const Images = [
    {
      imgPath: Img_1,
    },
    {
      imgPath: Img_2,
    },
    {
      imgPath: Img_3,
    },
    {
      imgPath: Img_4,
    },
    {
      imgPath: Img_5,
    },
    {
      imgPath: Img_6,
    },
  ];

  return (
    <Layout>
      <ProductLayout links={vcLinks}>
        <ProductIntro
          title="TLS"
          subTitle="TNG's New Vacuum Components"
          contents="Meet the ultimate iPhone. With the fastest smartphone chip. 5G speed. A Pro camera system that’s killer in low light. A LiDAR Scanner for more realistic AR. And two great sizes to choose from — including our largest display ever. Let’s see what this thing can do."
          hero={HERO}
          catalogue="https://drive.google.com/file/d/1gwcfUgDmBSfFl16nZykFxTy1bJm3aA19/view?usp=sharing"
          step="https://drive.google.com/file/d/1bTWzKVrzCQgSUT_CotktnhtVUCTOex5N/view?usp=sharing"
        />
        <Advantage contents={Advantages} />
        <ProductImg Images={Images} />
      </ProductLayout>
    </Layout>
  );
};

export default JKRPage;
