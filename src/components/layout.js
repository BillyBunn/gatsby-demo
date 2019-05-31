import React from "react"

import { css } from "@emotion/core"

import Header from "../components/header"

export default ({ children }) => (
  <div
    css={css`
      margin: 3rem auto;
      max-width: 650px;
      padding: 0 1rem;
    `}
  >
    <Header>Header</Header>
    {children}
  </div>
)
