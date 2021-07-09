import React from "react"
import styled from "styled-components"

const Container = styled.li`
  list-style: none;
  & a {
    display: flex;
    flex-direction: column;
  }
`

const Wrapper = styled.a`
  display: block;
`

const Icon = styled.figure`
  background-repeat: no-repeat;
  background-image: url("https://www.apple.com/v/watch/home/am/images/overview/icons/watch_nav_accessories__bu98chbn5rea_large.svg");
`

const ProductNavItem = () => {
  return (
    <Container>
      <a>
        <Icon />
        <span>Title</span>
      </a>
    </Container>
  )
}

export default ProductNavItem
