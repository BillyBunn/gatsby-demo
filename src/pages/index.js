import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Header>Home</Header>
    <h2>Hello Billy!</h2>
    <p>Here's some text</p>
    <img
      style={{ display: `block` }}
      src="https://placekitten.com/400/200"
      alt=""
    />
    <ul>
      <li>
        <Link to="/about">About page</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
      <li>
        <Link to="/about-css-modules/">Styling with CSS Modules example</Link>
      </li>
      <li>
        <Link to="/emotion-styles-example/">Styling with Emotion example</Link>
      </li>
    </ul>
  </div>
)
