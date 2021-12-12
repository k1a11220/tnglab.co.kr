import React from "react";
import Layout from "../layout/layout";
import styled from "styled-components";

// import DOWNARROW from "../images/downArrow.svg";
import HERO from "../images/hero_2.png";
import Bulb from "../images/lightbulb.svg";
import Earth from "../images/Earth.svg";

const HEROContainer = styled.div`
  height: calc(100vh - 54px);
  /* height: 710px; */
  background: url(${(props) => props.imgPath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  & div {
    display: flex;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    flex-direction: column;
    /* align-items: center; */

    /* justify-content: space-between; */
    text-align: center;
  }

  & h1 {
    /* margin-top: calc((80vh - 54px) / 2.2); */
    margin-top: 120px;
    font-size: var(--font-xl);
    font-weight: 700;
    color: #0a0a0a;
  }

  & img {
    margin-bottom: 40px;
  }

  & black {
    /* font-weight: 700; */
    transition: all 0.2 ease-in-out;
    color: var(--color-white);
  }

  & p {
    font-size: var(--font-md);
    color: var(--color-white);
    margin-top: 24px;
    font-weight: 500;
  }
`;

const Icon = styled.img`
  width: 24px;
`;

const InfoContainer = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
`;

const InfoWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: var(--width);
  text-align: ${(props) => props.align};

  justify-content: space-between;

  @media (max-width: 844px) {
    flex-direction: ${(props) => props.direction};
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  & h2 {
    font-size: 30px;
    font-weight: 600;
    color: ${(props) => props.color};
  }

  & p {
    font-size: var(--font-sm);
    margin-top: 18px;
    font-weight: 500;
    color: #9f9f9f;
  }

  & img {
    width: var(--icon-xl);
    margin-right: ${(props) => props.marginRight};
    margin-left: ${(props) => props.marginLeft};

    @media (max-width: 844px) {
      margin: 0;
      margin-bottom: 40px;
    }
  }
`;
// markup
const IndexPage = () => {
  return (
    <Layout>
      <HEROContainer imgPath={HERO}>
        <div>
          <h1>
            {/* We build <br /> */}
            Technology for Next Generation
          </h1>
          {/* <p>
            We provide total solutions for Viewports, Hydrogen Compressor,
            Vacuum Componets
          </p> */}
          {/* <Icon src={DOWNARROW} alt="arrow" /> */}
        </div>
      </HEROContainer>
      <InfoContainer color="white">
        <InfoWrapper marginRight="100px" direction="column">
          <Icon src={Bulb} alt="bulb" />
          <div>
            <h2>Always study for a better tomorrow.</h2>
            <p>
              TNG is an acronym for Technology for Next Generation. TNG's
              creative ideas and technology will help create a better tomorrow
              Because We have a mission. We're going to use technology for the
              next generation. We will develop it to reduce inconvenience in the
              world.
            </p>
          </div>
        </InfoWrapper>
      </InfoContainer>
      <InfoContainer color="#1d1d1f">
        <InfoWrapper
          color="white"
          marginLeft="100px"
          direction="column-reverse"
        >
          <div>
            <h2>Tentamen, Constantly challenging for the better world.</h2>
            <p>
              Tentamen means 'challenge' in Latin. TNG is constantly challenge
              for a better future.
            </p>
          </div>
          <Icon src={Earth} alt="Earth" />
        </InfoWrapper>
      </InfoContainer>
    </Layout>
  );
};

export default IndexPage;
