import React from "react"
import Layout from "../layout/layout"
import styled from "styled-components"

const Container = styled.section`
  margin: 0 auto;
  width: var(--width);
  text-align: center;

  & h1 {
    font-size: var(--font-xl);
    color: #515151;
  }
  & h2 {
    font-size: var(--font-lg);
  }
`

// markup
const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <h1>TNG has a plan</h1>
        <h2>In the fight against climate change, every voice matters.</h2>
        <p>
          Earth won’t wait. Neither will we. We’re carbon neutral. And by 2030, every product you
          love will be too.
        </p>
      </Container>
    </Layout>
  )
}

export default AboutPage
