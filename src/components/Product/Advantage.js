import React from "react"
import styled from "styled-components"

import CHECK from "../../images/greenCheckmark.svg"

const AdvantageContainer = styled.div`
  background-color: #1d1d1f;
  & h1 {
    color: #f5f5f7;
  }
`

const AdvantageWrapper = styled.div`
  display: grid;
  width: var(--width);
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

const Advantage = ({ contents }) => {
  return (
    <AdvantageContainer>
      <AdvantageWrapper>
        <div>
          <h1>Advantage</h1>
          <AdvantageGrid>
            {contents.map(({ title }) => (
              <AdvantageItem>
                <p>{title}</p>
                <img src={CHECK} alt="Green Check" />
              </AdvantageItem>
            ))}
          </AdvantageGrid>
        </div>
      </AdvantageWrapper>
    </AdvantageContainer>
  )
}

export default Advantage
