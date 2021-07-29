import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import JK from "../../images/viewports/JK.png"
import JKR from "../../images/viewports/JKR.png"
import NYS from "../../images/viewports/NYS.png"

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
  padding-left: 52px;
  margin: 0;
  margin-bottom: var(--gap);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  @media screen and (max-width: 769px) {
    flex-direction: column-reverse;
    text-align: center;
    padding-left: 0;
    padding: 50px;
    justify-content: space-around;
  }

  & h3 {
    font-size: var(--font-lg);
    margin-bottom: 24px;
    @media screen and (max-width: 769px) {
      margin-bottom: 12px;
    }
  }

  & p {
    font-size: var(--font-xs);
    font-weight: 500;
  }

  & p:nth-of-type(2) {
    /* color: #a2a1a1; */
  }

  & img {
    height: 200px;

    @media screen and (max-width: 769px) {
      margin-right: 0;
      height: 140px;
    }
  }
`

const ViewportList = () => {
  return (
    <BuyContainer>
      <BuyWrapper>
        <h1>More Integral Viewport Series</h1>
        <Link to="/viewport/jk-series">
          <BuyContentWrapper>
            <div>
              <h3>JK-Series</h3>
              <p>Circle type Integral Viewport</p>
              <p>Supports ISO Flange Standard (NW)</p>
            </div>
            <div>
              <img src={JK} />
            </div>
          </BuyContentWrapper>
        </Link>
        <Link to="/viewport/jkr-series">
          <BuyContentWrapper>
            <div>
              <h3>JKR-Series</h3>
              <p>Circle type Integral Viewport</p>
              <p>Supports ISO Flange Standard (NW)</p>
            </div>
            <div>
              <img src={JKR} />
            </div>
          </BuyContentWrapper>
        </Link>
        <Link to="/viewport/nys-series">
          <BuyContentWrapper>
            <div>
              <h3>NYS-Series</h3>
              <p>Circle type Integral Viewport</p>
              <p>Supports ISO Flange Standard (NW)</p>
            </div>
            <div>
              <img src={NYS} />
            </div>
          </BuyContentWrapper>
        </Link>
      </BuyWrapper>
    </BuyContainer>
  )
}

export default ViewportList
