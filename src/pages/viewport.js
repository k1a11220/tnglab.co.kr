import React from "react"
import Layout from "../layout/layout"
import ProductLayout from "../layout/productLayout"

const ViewportPage = () => {
  const vpLinks = [
    {
      link: "/viewport/jk-series",
      name: "JK-Series",
      icon: "",
    },
    {
      link: "/viewport/jkr-series",
      name: "JKR-Series",
      icon: "",
    },
    {
      link: "/viewport/nys-series",
      name: "NYS-Series",
      icon: "",
    },
  ]

  return (
    <Layout>
      <ProductLayout links={vpLinks}></ProductLayout>
    </Layout>
  )
}

export default ViewportPage
