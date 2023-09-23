import React from "react";
import Layout from "../layout/layout";
import styled from "styled-components";

import SantaTree from "../images/santaTree.png";
import TNGMap from "../components/TNGMap";

import ISO_KR from "../images/certifications/ISO_KR.png";
import ISO_EN from "../images/certifications/ISO_EN.png";
import ECO_KR from "../images/certifications/ECO_KR.png";
import ECO_EN from "../images/certifications/ECO_EN.png";
import VENTURE_KR from "../images/certifications/VENTURE_KR.png";
import VENTURE_EN from "../images/certifications/VENTURE_EN.png";
// import GreenGraph from "../images/GreenGraph.svg";

const Container = styled.section`
  text-align: center;
`;

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
`;

const IntroWrapper = styled.div`
  width: 100%;
  width: var(--width);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  & img {
    @media screen and (max-width: 1200px) {
      margin-top: 60px;
      margin-left: 0;
      max-width: 300px;
    }
    /* position: absolute; */
    margin-left: 60px;
    max-width: 400px;
  }
`;

const LocationContainer = styled.div`
  & h2 {
    font-size: var(--font-lg);
    font-weight: 600;
    padding-top: 90px;
    margin-bottom: 50px;
  }
`;

const CertificationContainer = styled.div`
  background-color: #1d1d1f;

  & h2 {
    font-size: var(--font-lg);
    font-weight: 600;
    padding-top: 90px;
    color: white;
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow: scroll;
  max-width: var(--width);
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 40px;

  & img {
    max-width: 300px;
    margin: 20px;
    border-radius: 20px;
  }
`;

// markup
const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <IntroContainer>
          <IntroWrapper>
            <div>
              <h1>
                Our <b>green</b> journey
              </h1>
              <h3>TNG's carbon neutral project will make better future.</h3>
            </div>

            <img src={SantaTree} alt="SantaTree" />
          </IntroWrapper>
        </IntroContainer>
        <LocationContainer>
          <h2>Where we are</h2>
          <TNGMap />
        </LocationContainer>
        <CertificationContainer>
          <h2>Certifications</h2>
          <ScrollContainer>
            <img src={ISO_KR} alt="certifications" />
            <img src={ISO_EN} alt="certifications" />
            <img src={ECO_KR} alt="certifications" />
            <img src={ECO_EN} alt="certifications" />
            <img src={VENTURE_KR} alt="certifications" />
            <img src={VENTURE_EN} alt="certifications" />
          </ScrollContainer>
        </CertificationContainer>
      </Container>
    </Layout>
  );
};

export default AboutPage;
