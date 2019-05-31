import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"

export default ({ data }) => {
  console.log("DATA", data.allFile)
  const files = data.allFile.edges.map(edge => edge.node)
  console.log("FILES", files)
  return (
    <Layout>
      <h3>My Files</h3>
      <table>
        <thead>
          <tr>
            <th>name</th>
            {/* <th>extension</th> */}
            <th>relativePath</th>
            <th>prettySize</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, idx) => (
            <tr key={idx}>
              <td>{file.name}</td>
              {/* <td>{file.extension}</td> */}
              <td>{file.relativePath}</td>
              <td>{file.prettySize}</td>
              <td>{file.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
          extension
          relativePath
          prettySize
          birthTime(fromNow: true)
        }
      }
    }
  }
`
