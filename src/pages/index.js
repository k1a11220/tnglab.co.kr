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
  background-repeat: no-repeat;
  background-position: center;

  & h1 {
    font-size: var(--font-lg);
    margin-top: 6vw;
    text-align: center;
    font-weight: 500;
  }

  & img {
    margin-bottom: 40px;
  }

  & black {
    font-weight: 700;
    transition: all 0.2 ease-in-out;
  }
`

const Icon = styled.img`
  width: 24px;
`
// markup
const IndexPage = () => {
  const TITLE = ["Integral Viewport", "Vacuum Component", "Hydrogen Compressor"]
  let titleStatus = 0

  function changeTitle() {
    let randomNumber = Math.random()
    let ments = TITLE[Math.floor(randomNumber * 2)]
    return ments
  }

  return (
    <Layout>
      <Container imgPath={HERO}>
        <h1>
          Total solution for [ <black>{TITLE[0]}</black> ]
        </h1>
        <Icon src={DOWNARROW} alt="arrow" />
      </Container>
    </Layout>
  )
}

export default IndexPage
