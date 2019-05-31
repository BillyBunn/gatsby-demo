import React from "react"
import { Link } from "gatsby"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

const HorizontalNav = styled.nav`
> ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    margin-left: none;
    > li {
      margin-right: 1rem;
      > a {
      }
      &:first-child {
        ${'' /* margin-right: 0; */}
      }
    }
  }
`

const Nav = props => (
  <HorizontalNav>
    <ul>
      {props.children.map((child, idx) => (
        <li key={idx}>{child}</li>
      ))}
    </ul>
  </HorizontalNav>
)


const Title = props => (
  <Link
    to="/"
    css={css`
      background-image: none;
      text-shadow: none;
    `}
  >
    <h1
      css={css`
        color: turquoise;
      `}
    >
      {props.children}
    </h1>
  </Link>
)

export default props => (
  <header>
    <Title>Site Title</Title>

    <Nav>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link>
      <Link to="/about-css-modules/">CSS Modules</Link>
      <Link to="/emotion-styles-example/">Emotion Styling</Link>
    </Nav>
  </header>
)
