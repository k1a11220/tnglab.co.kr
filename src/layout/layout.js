import React from "react"
import styled from "styled-components"
import NavBar from "../components/NavBar"
import GlobalStyle from "../styles/globalStyle"
import Footer from "../components/Footer"

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <main>
        <NavBar />
        <Container>{children}</Container>
        <Footer />
      </main>
    </React.Fragment>
  )
}

export default Layout
