import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Container = styled.li`
  list-style: none;
  & a {
    display: flex;
    flex-direction: column;
  }

  & span {
    font-weight: 500;
  }
  margin: 0 30px 0 30px;
  text-align: center;
`

// const Wrapper = styled.a`
//   display: block;
// `

const Icon = styled.img`
  align-self: center;
  width: 50px;
`

const ProductNavItem = ({ link, name, icon }) => {
  return (
    <Container>
      <Link to={link}>
        <Icon src={icon} alt="icon" />
        <span>{name}</span>
      </Link>
    </Container>
  )
}

export default ProductNavItem
