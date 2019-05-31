import React from "react"

import {rhythm} from '../utils/typography.js'
import { css } from "@emotion/core"

import Header from "../components/header"

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 650px;
      ${'' /* padding: 0 1rem; */}
      ${'' /* padding: ${rhythm(2)}; */}
      ${'' /* padding-top: ${rhythm(1.5)}; */}
    `}
  >
    <Header>Header</Header>
    {children}
  </div>
)
