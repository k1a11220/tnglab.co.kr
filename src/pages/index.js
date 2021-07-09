import React from "react"
import Layout from "../layout/layout"
import styled from "styled-components"

import DOWNARROW from "../images/downArrow.svg"
import HERO from "../images/hero.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 54px);
  background: url(${(props) => props.imgPath});
  background-size: cover;

  & h1 {
    font-size: 44px;
    margin-top: 80px;
    text-align: center;
  }
  & img {
    margin-bottom: 40px;
  }
`

const Icon = styled.img`
  width: 24px;
`
// markup
const IndexPage = () => {
  return (
    <Layout>
      <Container imgPath={HERO}>
        <h1>Total solution for integral viewport</h1>
        <Icon src={DOWNARROW} alt="arrow" />
      </Container>
    </Layout>
  )
}

export default IndexPage
