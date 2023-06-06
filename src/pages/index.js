import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>If teacher [click blog link above]</p>
      <p>else [terminate page!]</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage