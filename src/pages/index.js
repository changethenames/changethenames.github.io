import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Data from "../components/data"

import containerStyles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={containerStyles.content}>
      <Data />
    </div>
  </Layout>
)

export default IndexPage
