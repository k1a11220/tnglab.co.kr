import React from "react";
import styled from "styled-components";
import Layout from "../layout/layout";
import ProductLayout from "../layout/productLayout";

import PartnerLogo from "../images/partner-logo-3.png";
import ViewportFamily from "../images/viewports/OutlineBlurr-2.png";

import JKIcon from "../images/viewports/JK.svg";
import JKRIcon from "../images/viewports/JKR.svg";
import NYSIcon from "../images/viewports/NYS.svg";

const vpLinks = [
  {
    link: "/viewport/jk-series",
    name: "JK Series",
    icon: JKIcon,
    key: 1,
  },
  {
    link: "/viewport/jkr-series",
    name: "JKR Series",
    icon: JKRIcon,
    key: 2,
  },
  {
    link: "/viewport/nys-series",
    name: "NYS Series",
    icon: NYSIcon,
    key: 3,
  },
];

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryGridWrapper = styled.div`
  width: 100%;
  /* background-color: black; */
`;

const CategoryGrid = styled.div`
  margin: 0 auto;
  width: var(--width);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 380px;
  grid-gap: var(--gap);
  padding: 0 0 80px 0;
`;

const CategoryWrapper = styled.div`
  background-color: #515151;
  border-radius: 15px;

  &:first-of-type {
    grid-column: 1 / span 2;
  }
`;

const IntroContainer = styled.div`
  width: 100%;
  padding: 80px 0 80px 0;
  background-color: #e8e8e8;
`;

const IntroWrapper = styled.div`
  width: var(--width);
  text-align: center;
  margin: 0 auto;

  & h1 {
    font-size: var(--font-lg);
    margin-bottom: 24px;
    font-weight: 600;
  }

  & h3 {
    color: var(--color-gray);
    font-size: var(--font-sm);
    font-weight: 500;
  }

  & img {
    width: var(--width);
  }

  & li {
    list-style: none;
  }
`;

const RefContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 80px 0;

  & img {
    width: var(--width);
    margin: 40px;
  }
`;

const RefWrapper = styled.div`
  width: var(--width);
  margin: 0 auto;
  text-align: center;

  & h1 {
    font-size: var(--font-lg);
    margin-bottom: 24px;
    font-weight: 600;
  }

  & h3 {
    font-size: var(--font-sm);
    font-weight: 500;
    color: var(--color-gray);
  }

  & img {
    width: var(--width);
  }

  & li {
    list-style: none;
  }

  & b {
    font-weight: 500;
    color: var(--color-gray);
  }
`;

const ViewportPage = () => {
  return (
    <Layout>
      <ProductLayout links={vpLinks}>
        <Container>
          <IntroContainer>
            <IntroWrapper>
              <li>
                <h1>Integral Viewport, It is more safely and convenient</h1>
                <h3>
                  When designing a vacuum chamber, applying an integrated
                  viewport will reduce cost, reduce design time, and shorten
                  assembly time.
                </h3>
                <img src={ViewportFamily} alt="ViewportFamily" />
              </li>
            </IntroWrapper>
          </IntroContainer>

          <RefContainer>
            <RefWrapper>
              <h1>Used by companies and institutions around the world</h1>
              <h3>
                Applied Materials, Korea Atomic Energy Research Institute,
                T-Robotics, ASM, H&iruja, INVENIA, Sunic System, etc. <br />{" "}
                Meet the Integral Viewport used by various companies and
                organizations today.
              </h3>
            </RefWrapper>
            <img src={PartnerLogo} alt="parter logo" />
          </RefContainer>
        </Container>
      </ProductLayout>
    </Layout>
  );
};

export default ViewportPage;
