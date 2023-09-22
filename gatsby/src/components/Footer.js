import React from "react";
import styled from "styled-components";

import TNGLOGO from "../images/LogoWhite.svg";

const Container = styled.footer`
  background-color: #0a0a0a;
  & * {
    color: var(--color-white);
  }
`;

const Wrapper = styled.div`
  width: var(--width);
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 0 60px 0;
`;

const LogoWrapper = styled.div`
  margin-bottom: 32px;
  & p {
    margin-top: 12px;
    font-weight: 500;
    font-size: 19px;
  }
`;

const Logo = styled.img`
  height: 26px;
`;

const InfoWrapper = styled.div`
  & p {
    color: #9f9f9f;
    font-weight: 500;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src={TNGLOGO} alt="logo" fill="white" />
          <p>Technology for Next Generation</p>
        </LogoWrapper>
        <InfoWrapper>
          <p>
            Business Registration Number 677-87-01362 | Venture verification
            company
          </p>
          <p>
            Gyeonggi University Industrial Cooperation Group 303, 154-42,
            Gwanggyosan-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do
          </p>
          <p>
            Tel +82 10-4485-1018 | Cooperation / Investment sales@tnglab.co.kr
          </p>
          <p>
            COPYRIGHT Ⓒ {new Date().getFullYear()} TNG CO., LTD. ALL RIGHTS
            RESERVED.
          </p>
        </InfoWrapper>
      </Wrapper>
    </Container>
  );
};

export default Footer;
