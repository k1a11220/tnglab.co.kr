import React from "react"
import styled from "styled-components"

import HERO from "../../images/hero.png"

const IntroContainer = styled.div`
  width: var(--width);
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 60px;
`

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
  }

  & h2 {
    font-size: var(--font-xl);
    margin-bottom: 20px;
  }

  & p {
    font-size: var(--font-sm);
    font-weight: 500;
  }
`

const ButtonWrapper = styled.span`
  padding-top: 52px;
  & a {
    cursor: pointer;
    padding: 8px 24px 8px 24px;
    border: none;
    border-radius: 20px;
    margin: 12px;
    font-size: var(--font-sm);
    background-color: #f5f5f7;
    @media screen and (max-width: 1400px) {
      margin: 8px;
      font-size: var(--font-md);
      padding: 16px 24px 16px 24px;
    }
  }

  & a:first-of-type {
    background-color: #0071e3;
    color: #ffffff;
  }

  & a:hover {
    background-color: ;
  }

  @media screen and (max-width: 1400px) {
    display: grid;
    width: 100%;
  }
`

const HeroImg = styled.div`
  background: url(${(props) => props.imgPath});
  background-size: cover;
  height: 700px;
  border-radius: 15px;
  @media screen and (max-width: 1400px) {
    height: 50vw;
  }
`

const ProductIntro = () => {
  return (
    <IntroContainer>
      <IntroWrapper>
        <h1>TNG's Smart Viewport</h1>
        <h2>JK-Series</h2>
        <p>
          Meet the ultimate iPhone. With the fastest smartphone chip. 5G speed. A Pro camera system
          that’s killer in low light. A LiDAR Scanner for more realistic AR. And two great sizes to
          choose from — including our largest display ever. Let’s see what this thing can do.
        </p>
        <ButtonWrapper>
          <a href="mailto:sales@tnglab.co.kr">Estimate</a>
          <a>Catalogue</a>
          <a>3D Step</a>
        </ButtonWrapper>
      </IntroWrapper>
      <HeroImg imgPath={HERO} />
    </IntroContainer>
  )
}

export default ProductIntro
