import React from "react"
import Layout from "../../layout/layout"
import ProductLayout from "../../layout/productLayout"

import ViewportList from "../../components/Product/ViewportList"
import ProductIntro from "../../components/Product/ProductIntro"
import Advantage from "../../components/Product/Advantage"
import ProductImg from "../../components/Product/ProductImg"

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

  return (
    <Layout>
      <ProductLayout links={vpLinks}>
        <ProductIntro />
        <Advantage />
        <ProductImg />
        <ViewportList />
      </ProductLayout>
    </Layout>
  )
}

export default JKPage
