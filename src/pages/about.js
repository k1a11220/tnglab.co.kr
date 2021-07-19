import React from "react"
import Layout from "../layout/layout"
import styled from "styled-components"

import GreenGraph from "../images/GreenGraph.svg"
import TNGMap from "../components/TNGMap"

const Container = styled.section`
  text-align: center;
`

const IntroContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: var(--width);
  height: calc(100vh - 54px - 304px);

  & h1 {
    font-size: var(--font-xl);
    & b {
      color: #00d959;
    }
    margin-bottom: 24px;
  }
  & h3 {
    font-size: var(--font-md);
    font-weight: 500;
  }

  & img {
    width: var(--width);
    margin-top: 80px;
  }
`

const LocationContainer = styled.div``
// markup
const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <IntroContainer>
          <h1>
            Our <b>green</b> journey
          </h1>
          <h3>TNG's carbon neutral project will make better future.</h3>
          <img src={GreenGraph} alt="GreenGraph" />
        </IntroContainer>
        <LocationContainer>
          <h1>Where we are</h1>
          <TNGMap />
        </LocationContainer>
      </Container>
    </Layout>
  )
}

export default AboutPage
