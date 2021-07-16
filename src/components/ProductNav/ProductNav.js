import React from "react"
import styled from "styled-components"

import ProductNavItem from "./ProductNavItem"

const Container = styled.div`
  height: 120px;
  background-color: #f5f5f7;
`

const ItemWrapper = styled.div`
  width: var(--width);
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1400px) {
    width: 92%;
  }
`

const ProductNav = ({ links }) => {
  return (
    <Container>
      <ItemWrapper>
        {links.map(({ link, name, icon, key }) => (
          <ProductNavItem link={link} name={name} icon={icon} key={key} />
        ))}
      </ItemWrapper>
    </Container>
  )
}

export default ProductNav
