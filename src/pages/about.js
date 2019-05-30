import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Header>About</Header>
    <h2>All about the site</h2>
    <p>This is the about page.</p>
    <img style={{display:`block`}} src="https://placekitten.com/300/" alt="" />
    <Link to="/">Home page</Link>
  </div>
)
