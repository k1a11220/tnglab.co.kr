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
  background-color: var(--color-semiGray);
  height: calc(100vh - 54px);

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

const IntroWrapper = styled.div`
  width: 100%;
  width: var(--width);
`

const LocationContainer = styled.div`
  & h2 {
    font-size: var(--font-lg);
    font-weight: var(--font-weight-semi-bold);
    padding: 40px;
  }
`

const CertificationContainer = styled.div`
  background-color: #1d1d1f;
  height: 800px;

  & h2 {
    color: white;
  }
`

// markup
const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <IntroContainer>
          <IntroWrapper>
            <h1>
              Our <b>green</b> journey
            </h1>
            <h3>TNG's carbon neutral project will make better future.</h3>
            {/* <img src={GreenGraph} alt="GreenGraph" /> */}
          </IntroWrapper>
        </IntroContainer>
        <LocationContainer>
          <h2>Where we are</h2>
          <TNGMap />
        </LocationContainer>
        <CertificationContainer>
          <h2>Certifications</h2>
        </CertificationContainer>
      </Container>
    </Layout>
  )
}

export default AboutPage
