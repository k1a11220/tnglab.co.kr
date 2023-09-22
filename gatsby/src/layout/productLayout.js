import React from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/globalStyle"

import ProductNav from "../components/ProductNav/ProductNav"

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const ProductLayout = ({ children, links }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <ProductNav links={links}></ProductNav>
        {children}
      </Container>
    </React.Fragment>
  )
}

export default ProductLayout
