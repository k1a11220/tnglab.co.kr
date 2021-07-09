import React from "react"
import styled from "styled-components"

import ProductNavItem from "./ProductNavItem"

const Container = styled.div`
  height: 120px;
  background-color: #f2f2f2;
`

const ItemWrapper = styled.div`
  width: var(--width);
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProductNav = () => {
  return (
    <Container>
      <ItemWrapper>
        <ProductNavItem></ProductNavItem>
      </ItemWrapper>
    </Container>
  )
}

export default ProductNav
