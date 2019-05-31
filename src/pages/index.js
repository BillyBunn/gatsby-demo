import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"

export default ({ data }) => (
  <Layout>
    <h2>Hello Billy!</h2>
    <p>Here's some text about {data.site.siteMetadata.title}</p>
    <img
      src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
      alt="Group of pandas eating bamboo"
    />
    <img
      // style={{ display: `block` }}
      src="https://placekitten.com/400/200"
      alt=""
    />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`