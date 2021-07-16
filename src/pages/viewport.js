import React from "react"
import styled from "styled-components"
import Layout from "../layout/layout"
import ProductLayout from "../layout/productLayout"

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CategoryGrid = styled.div`
  width: var(--width);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 380px;
  grid-gap: var(--gap);
  margin-top: var(--gap);
  margin-bottom: var(--gap);
`

const CategoryWrapper = styled.div`
  background-color: #515151;
  border-radius: 15px;

  &:first-of-type {
    grid-column: 1 / span 2;
  }
`

const ViewportPage = () => {
  return (
    <Layout>
      <Container>
        <CategoryGrid>
          <CategoryWrapper></CategoryWrapper>
          <CategoryWrapper></CategoryWrapper>
          <CategoryWrapper></CategoryWrapper>
        </CategoryGrid>
      </Container>
    </Layout>
  )
}

export default ViewportPage
