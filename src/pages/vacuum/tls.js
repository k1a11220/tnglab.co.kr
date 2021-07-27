import React from "react"
import Layout from "../../layout/layout"
import ProductLayout from "../../layout/productLayout"

import ViewportList from "../../components/Product/ViewportList"
import ProductIntro from "../../components/Product/ProductIntro"
import Advantage from "../../components/Product/Advantage"
import ProductImg from "../../components/Product/ProductImg"

import CHECK from "../../images/greenCheckmark.svg"
import HERO from "../../images/hero.png"

const JKRPage = () => {
  const vcLinks = [
    {
      link: "/vacuum/tls",
      name: "TLS",
      icon: "",
      key: 1,
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
      <ProductLayout links={vcLinks}>
        <ProductIntro
          title="TLS"
          subTitle="TNG's New Vacuum Components"
          contents="Meet the ultimate iPhone. With the fastest smartphone chip. 5G speed. A Pro camera system that’s killer in low light. A LiDAR Scanner for more realistic AR. And two great sizes to choose from — including our largest display ever. Let’s see what this thing can do."
        />
        <Advantage contents={Advantages} />
        <ProductImg Images={Images} />
        <ViewportList />
      </ProductLayout>
    </Layout>
  )
}

export default JKRPage
