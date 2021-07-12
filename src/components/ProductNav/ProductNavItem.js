import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Container = styled.li`
  list-style: none;
  & a {
    display: flex;
    flex-direction: column;
  }
  margin: 0 30px 0 30px;
`

const Wrapper = styled.a`
  display: block;
`

const Icon = styled.img`
  align-self: center;
  width: 50px;
`

const ProductNavItem = ({ link, name }) => {
  return (
    <Container>
      <Link to={link}>
        <Icon
          src="https://www.apple.com/v/watch/home/am/images/overview/icons/watch_nav_accessories__bu98chbn5rea_large.svg"
          alt="icon"
        />
        <span>{name}</span>
      </Link>
    </Container>
  )
}

export default ProductNavItem
