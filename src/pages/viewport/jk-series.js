import React from "react"
import Layout from "../../layout/layout"
import ProductLayout from "../../layout/productLayout"

import ViewportList from "../../components/Product/ViewportList"
import ProductIntro from "../../components/Product/ProductIntro"
import Advantage from "../../components/Product/Advantage"
import ProductImg from "../../components/Product/ProductImg"

import CHECK from "../../images/greenCheckmark.svg"
import HERO from "../../images/hero.png"

const JKPage = () => {
  const vpLinks = [
    {
      link: "/viewport/jk-series",
      name: "JK-Series",
      icon: "",
      key: 1,
    },
    {
      link: "/viewport/jkr-series",
      name: "JKR-Series",
      icon: "",
      key: 2,
    },
    {
      link: "/viewport/nys-series",
      name: "NYS-Series",
      icon: "",
      key: 3,
    },
  ]

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
  ]

  const Images = [
    {
      imgPath: HERO,
    },
    {
      imgPath: HERO,
    },
    {
      imgPath: HERO,
    },
    {
      imgPath: HERO,
    },
  ]

  return (
    <Layout>
      <ProductLayout links={vpLinks}>
        <ProductIntro
          title="JK-Series"
          subTitle="TNG's Smart Viewport"
          contents="Meet the ultimate iPhone. With the fastest smartphone chip. 5G speed. A Pro camera system that’s killer in low light. A LiDAR Scanner for more realistic AR. And two great sizes to choose from — including our largest display ever. Let’s see what this thing can do."
        />
        <Advantage contents={Advantages} />
        <ProductImg Images={Images} />
        <ViewportList />
      </ProductLayout>
    </Layout>
  )
}

export default JKPage
