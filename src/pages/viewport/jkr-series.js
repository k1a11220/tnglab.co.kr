import React from "react";
import Layout from "../../layout/layout";
import ProductLayout from "../../layout/productLayout";

import ViewportList from "../../components/Product/ViewportList";
import ProductIntro from "../../components/Product/ProductIntro";
import Advantage from "../../components/Product/Advantage";
import ProductImg from "../../components/Product/ProductImg";

// import CHECK from "../../images/greenCheckmark.svg"
import HERO from "../../images/viewports/JKR.png";

import JKIcon from "../../images/viewports/JK.svg";
import JKRIcon from "../../images/viewports/JKR.svg";
import NYSIcon from "../../images/viewports/NYS.svg";

import Img_1 from "../../images/viewports/jkr/viewport-1.jpg";
import Img_2 from "../../images/viewports/jkr/viewport-2.jpg";
import Img_3 from "../../images/viewports/jkr/viewport-3.jpg";
import Img_4 from "../../images/viewports/jkr/viewport-4.jpg";
import Img_5 from "../../images/viewports/jkr/viewport-5.jpg";
import Img_6 from "../../images/viewports/jkr/viewport-6.jpg";

const JKRPage = () => {
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
  ];

  return (
    <Layout>
      <ProductLayout links={vpLinks}>
        <ProductIntro
          title="JKR-Series"
          subTitle="TNG's Smart Viewport"
          contents="Meet the ultimate iPhone. With the fastest smartphone chip. 5G speed. A Pro camera system that???s killer in low light. A LiDAR Scanner for more realistic AR. And two great sizes to choose from ??? including our largest display ever. Let???s see what this thing can do."
          hero={HERO}
          catalogue="https://drive.google.com/file/d/1SX9EFrSa35oQq9-6Xmw6i0XEobEhvavN/view?usp=sharing"
          step="https://drive.google.com/file/d/1dSCvPL5NpuGS2k7ePGv_jwuAqfn2WWRr/view?usp=sharing"
        />
        <Advantage contents={Advantages} />
        <ProductImg Images={Images} />
        <ViewportList />
      </ProductLayout>
    </Layout>
  );
};

export default JKRPage;
