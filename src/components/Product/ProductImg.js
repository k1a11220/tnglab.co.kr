import React from "react"
import styled from "styled-components"

const ProductImgContainer = styled.div`
  background-color: #ffffff;
  padding-bottom: 60px;
`

const ProductImgWrapper = styled.div`
  width: var(--width);
  margin: 0 auto;
  & h1 {
    padding: 136px 0 56px 0;
    font-weight: 500;
    font-size: var(--font-lg);
  }
`

const ProductImgGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 400px;
  grid-gap: var(--gap);
  @media screen and (max-width: 1200px) {
    grid-auto-rows: 30vw;
  }
  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 56vw;
  }
`

const ProductImgItem = styled.div`
  background-color: #1d1d1f;
  border-radius: 15px;
`

const ProductImgItem__Long = styled(ProductImgItem)`
  grid-area: 1 / 2 span;
`

const ProductImg = () => {
  return (
    <ProductImgContainer>
      <ProductImgWrapper>
        <h1>Feature</h1>
        <ProductImgGrid>
          <ProductImgItem></ProductImgItem>
          <ProductImgItem></ProductImgItem>
          <ProductImgItem></ProductImgItem>
          <ProductImgItem></ProductImgItem>
          <ProductImgItem></ProductImgItem>
          <ProductImgItem></ProductImgItem>
        </ProductImgGrid>
      </ProductImgWrapper>
    </ProductImgContainer>
  )
}

export default ProductImg
