import * as React from "react"
import Layout from '../components/layout'

const IndexPage = ({ pageContext: { content } }) => {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default IndexPage
