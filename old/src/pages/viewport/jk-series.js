import React from "react";
import Layout from "../../layout/layout";
import ProductLayout from "../../layout/productLayout";

import ViewportList from "../../components/Product/ViewportList";
import ProductIntro from "../../components/Product/ProductIntro";
import Advantage from "../../components/Product/Advantage";
import ProductImg from "../../components/Product/ProductImg";

import HERO from "../../images/viewports/JK.png";

import JKIcon from "../../images/viewports/JK.svg";
import JKRIcon from "../../images/viewports/JKR.svg";
import NYSIcon from "../../images/viewports/NYS.svg";

import Img_1 from "../../images/viewports/jk/viewport-1.jpg";
import Img_2 from "../../images/viewports/jk/viewport-2.jpg";
import Img_3 from "../../images/viewports/jk/viewport-3.jpg";
import Img_4 from "../../images/viewports/jk/viewport-4.jpg";
import Img_5 from "../../images/viewports/jk/viewport-5.jpg";
import Img_6 from "../../images/viewports/jk/viewport-6.jpg";
import Img_7 from "../../images/viewports/jk/viewport-7.jpg";
import Img_8 from "../../images/viewports/jk/viewport-8.jpg";

const JKPage = () => {
  const vpLinks = [
    {
      link: "/viewport/jk-series",
      name: "JK Series",
      icon: JKIcon,
      key: 1,
    },
    {
      link: "/viewport/jkr-series",
      name: "JKR Series",
      icon: JKRIcon,
      key: 2,
    },
    {
      link: "/viewport/nys-series",
      name: "NYS Series",
      icon: NYSIcon,
      key: 3,
    },
  ];

  const Advantages = [
    {
      title: "Cost reduction",
    },
    {
      title: "Reduction of assembly time",
    },
    {
      title: "Shortening of Part Cleaning time",
    },
    {
      title: "Excellent quality through quality verification.",
    },
    {
      title: "Can be used for LL-Chamber.",
    },
    {
      title: "Application of ISO-K flange standard is limited.",
    },
    {
      title: "Rectangular Viewport is available.",
    },
    {
      title: "3D step is provided with estimate.",
    },
    {
      title: "Simplify BOM through Total Assy provision.",
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
    {
      imgPath: Img_7,
    },
    {
      imgPath: Img_8,
    },
  ];

  return (
    <Layout>
      <ProductLayout links={vpLinks}>
        <ProductIntro
          title="JK-Series"
          subTitle="TNG's Smart Viewport"
          contents=" "
          hero={HERO}
          catalogue="https://drive.google.com/file/d/1SX9EFrSa35oQq9-6Xmw6i0XEobEhvavN/view?usp=sharing"
          step="https://drive.google.com/file/d/1w1jMXAohszBvICjPx_jsKtfCl7mUfWxV/view?usp=sharing"
        />
        <Advantage contents={Advantages} />
        <ProductImg Images={Images} />
        <ViewportList />
      </ProductLayout>
    </Layout>
  );
};

export default JKPage;
