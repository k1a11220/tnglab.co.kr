import React from "react"
import Layout from "../../layout/layout"
import ProductLayout from "../../layout/productLayout"

const vcLinks = [
  {
    link: "/vacuum/tls",
    name: "TLS",
    key: 1,
  },
]

const TLSPage = () => {
  return (
    <Layout>
      <ProductLayout links={vcLinks}>
        <h1>TLS Page</h1>
      </ProductLayout>
    </Layout>
  )
}

export default TLSPage
