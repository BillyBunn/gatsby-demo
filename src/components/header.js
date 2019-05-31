import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Title = styled.h1`
  color: turquoise;
  display: inline;
`

const Nav = styled.nav`
float: right;
  > ul {
    list-style: none;
    ${'' /* float: right; */}
    > li {
      display: inline-block;
      margin-right: 1rem;
      > a {
      }
    }
  }
`

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default props => (
  <header>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <Title>Site Title</Title>
    </Link>

    <Nav>
      <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/about-css-modules/">CSS Modules</ListLink>
        {/* <ListLink to="/emotion-styles-example/">Emotion Styling</ListLink> */}
      </ul>
    </Nav>
  </header>
)
