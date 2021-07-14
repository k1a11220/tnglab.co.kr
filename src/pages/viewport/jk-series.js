import React from "react"
import Layout from "../../layout/layout"
import ProductLayout from "../../layout/productLayout"
import styled from "styled-components"
import HERO from "../../images/hero.png"
import CHECK from "../../images/greenCheckmark.svg"

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

const AdvantageContainer = styled.div`
  background-color: #0a0a0a;
  & h1 {
    color: #f5f5f7;
  }
`

const AdvantageWrapper = styled.div`
  display: grid;
  width: var(--text-width);
  margin: 0 auto;
  padding-top: var(--page-padding);
  padding-bottom: var(--page-padding);
  & h1 {
    padding: 0 0 24px 0;
    font-weight: 500;
    font-size: var(--font-lg);
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

const AdvantageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 80px;
  @media screen and (max-width: 1200px) {
    padding-bottom: 60px;
  }
`

const AdvantageItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(245, 245, 247, 0.8);

  & p {
    color: #f5f5f7;
    font-size: var(--font-md);
    font-weight: 600;
  }

  & img {
    position: relative;
    top: 3px;
    height: 26px;
  }
`

const AdvantageImg = styled.div`
  display: grid;
  padding-left: 120px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: var(--gap);
  @media screen and (max-width: 1200px) {
    height: 100vw;
    padding: 0;
  }
`

const AdvantageImgContent = styled.div`
  background-color: white;
  border-radius: 15px;
`

const ProductImgContainer = styled.div`
  background-color: #ffffff;
  padding-bottom: 60px;
`

const ProductImgWrapper = styled.div`
  width: var(--width);
  margin: 0 auto;
  & h1 {
    padding: 136px 0 56px 0;
    font-weight: 500;
    font-size: var(--font-lg);
  }
`

const ProductImgGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 400px;
  grid-gap: var(--gap);
  @media screen and (max-width: 1200px) {
    grid-auto-rows: 30vw;
  }
  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 56vw;
  }
`

const ProductImgItem = styled.div`
  background-color: #1d1d1f;
  border-radius: 15px;
`

const ProductImgItem__Long = styled(ProductImgItem)`
  grid-area: 1 / 2 span;
`

const BuyContainer = styled.div`
  background-color: #f5f5f7;
  padding-bottom: 60px;
  & h1 {
    padding: 136px 0 40px 0;
    font-weight: 500;
    font-size: var(--font-lg);
  }
`

const BuyWrapper = styled.div`
  width: var(--width);
  margin: 0 auto;
`

const BuyContentWrapper = styled.div`
  height: 240px;
  border-radius: 15px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 80px;
  margin: 0;
  margin-bottom: var(--gap);

  & h3 {
    font-size: var(--font-lg);
    margin-bottom: 24px;
  }

  & p {
    font-size: var(--font-xs);
    font-weight: 500;
  }

  & p:nth-of-type(2) {
    /* color: #a2a1a1; */
  }

  & img {
    padding-right: 80px;
    height: 140px;
  }
`

// markup
const JKPage = () => {
  const vpLinks = [
    {
      link: "/viewport/jk-series",
      name: "JK-Series",
      icon: "",
    },
    {
      link: "/viewport/jkr-series",
      name: "JKR-Series",
      icon: "",
    },
    {
      link: "/viewport/nys-series",
      name: "NYS-Series",
      icon: "",
    },
  ]

  return (
    <Layout>
      <ProductLayout links={vpLinks}>
        <IntroContainer>
          <IntroWrapper>
            <h1>TNG's Smart Viewport</h1>
            <h2>JK-Series</h2>
            <p>
              Meet the ultimate iPhone. With the fastest smartphone chip. 5G speed. A Pro camera
              system that’s killer in low light. A LiDAR Scanner for more realistic AR. And two
              great sizes to choose from — including our largest display ever. Let’s see what this
              thing can do.
            </p>
            <ButtonWrapper>
              <a href="mailto:sales@tnglab.co.kr">Estimate</a>
              <a>Catalogue</a>
              <a>3D Step</a>
            </ButtonWrapper>
          </IntroWrapper>
          <HeroImg imgPath={HERO} />
        </IntroContainer>
        <AdvantageContainer>
          <AdvantageWrapper>
            <div>
              <h1>Advantage</h1>
              <AdvantageGrid>
                <AdvantageItem>
                  <p>Cost reduction</p>
                  <img src={CHECK} alt="Green Check" />
                </AdvantageItem>
                <AdvantageItem>
                  <p>Reduction of assembly time</p>
                  <img src={CHECK} alt="Green Check" />
                </AdvantageItem>
                <AdvantageItem>
                  <p>Shortening of Part Cleaning time</p>
                  <img src={CHECK} alt="Green Check" />
                </AdvantageItem>
                <AdvantageItem>
                  <p>Excellent quality through quality verification.</p>
                  <img src={CHECK} alt="Green Check" />
                </AdvantageItem>
                <AdvantageItem>
                  <p>Can be used for LL-Chamber.</p>
                  <img src={CHECK} alt="Green Check" />
                </AdvantageItem>
                <AdvantageItem>
                  <p>Application of ISO-K flange standard is limited.</p>
                  <img src={CHECK} alt="Green Check" />
                </AdvantageItem>
                <AdvantageItem>
                  <p>Rectangular Viewport is available.</p>
                  <img src={CHECK} alt="Green Check" />
                </AdvantageItem>
                <AdvantageItem>
                  <p>3D step is provided with estimate.</p>
                  <img src={CHECK} alt="Green Check" />
                </AdvantageItem>
                <AdvantageItem>
                  <p>Simplify BOM through Total Assy provision.</p>
                  <img src={CHECK} alt="Green Check" />
                </AdvantageItem>
              </AdvantageGrid>
            </div>
          </AdvantageWrapper>
        </AdvantageContainer>
        <div style={{ backgroundColor: "#1d1d1f", height: "1000px" }}></div>
        <ProductImgContainer>
          <ProductImgWrapper>
            <h1>Feature</h1>
            <ProductImgGrid>
              <ProductImgItem></ProductImgItem>
              <ProductImgItem></ProductImgItem>
              <ProductImgItem></ProductImgItem>
              <ProductImgItem></ProductImgItem>
              <ProductImgItem></ProductImgItem>
              <ProductImgItem></ProductImgItem>
            </ProductImgGrid>
          </ProductImgWrapper>
        </ProductImgContainer>
        <BuyContainer>
          <BuyWrapper>
            <h1>More Integral Viewport Series</h1>
            <BuyContentWrapper>
              <div>
                <h3>JK-Series</h3>
                <p>Circle type Integral Viewport</p>
                <p>Supports ISO Flange Standard (NW)</p>
              </div>
              <div>
                <img src="http://tnglab.co.kr/static/media/viewport-2.2443ffd7.png" />
              </div>
            </BuyContentWrapper>
            <BuyContentWrapper>
              <div>
                <h3>JKR-Series</h3>
                <p>Circle type Integral Viewport</p>
                <p>Supports ISO Flange Standard (NW)</p>
              </div>
              <div>
                <img src="http://tnglab.co.kr/static/media/viewport-2.2443ffd7.png" />
              </div>
            </BuyContentWrapper>
            <BuyContentWrapper>
              <div>
                <h3>NYS-Series</h3>
                <p>Circle type Integral Viewport</p>
                <p>Supports ISO Flange Standard (NW)</p>
              </div>
              <div>
                <img src="http://tnglab.co.kr/static/media/viewport-2.2443ffd7.png" />
              </div>
            </BuyContentWrapper>
          </BuyWrapper>
        </BuyContainer>
      </ProductLayout>
    </Layout>
  )
}

export default JKPage
