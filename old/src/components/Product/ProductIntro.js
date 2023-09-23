import React from "react";
import styled from "styled-components";

const IntroContainer = styled.div`
  width: var(--width);
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 60px;
`;

const IntroWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 60px;
  width: var(--text-width);

  & h1 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #717989;
  }

  & h2 {
    font-size: var(--font-xl);
    margin-bottom: 20px;
  }

  & p {
    font-size: var(--font-sm);
    font-weight: 500;
    color: #717989;
  }
`;

const ButtonWrapper = styled.span`
  padding-top: 52px;

  & a {
    cursor: pointer;
    padding: 8px 24px 8px 24px;
    border: 2px solid #0275d8;
    border-radius: 10px;
    margin: 12px;
    font-size: var(--font-sm);
    background-color: none;
    font-weight: 500;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    color: #0275d8;

    @media screen and (max-width: 769px) {
      margin: 8px;
      font-size: var(--font-md);
      padding: 16px 24px 16px 24px;
    }
  }

  & a:first-of-type {
    background-color: #0275d8;
    color: #ffffff;

    &:hover {
      background-color: #339cf5;
      border: 2px solid #339cf5;
    }
  }

  & a:hover {
    background-color: #cbe5fb;
  }

  @media screen and (max-width: 769px) {
    display: grid;
    width: 100%;
  }
`;

const HeroImg = styled.div`
  background: url(${(props) => props.imgPath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 700px;
  border-radius: 15px;
  @media screen and (max-width: 769px) {
    height: 50vw;
  }
`;

const ProductIntro = ({ title, subTitle, contents, hero, catalogue, step }) => {
  return (
    <IntroContainer>
      <IntroWrapper>
        {/* <h1>{subTitle}</h1> */}
        <h2>{title}</h2>
        <p>{contents}</p>
        <ButtonWrapper>
          <a href="mailto:sales@tnglab.co.kr">Estimate</a>
          <a href={catalogue} target="_blank" rel="noreferrer">
            Catalogue
          </a>
          <a href={step} target="_blank" rel="noreferrer">
            3D Step
          </a>
        </ButtonWrapper>
      </IntroWrapper>
      <HeroImg imgPath={hero} />
    </IntroContainer>
  );
};

export default ProductIntro;
