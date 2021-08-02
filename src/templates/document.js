import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ pageContext: { doc } }) => {
  return (
    <Layout>
      <SEO title={doc.data.name} />
      <div dangerouslySetInnerHTML={{ __html: doc.data.content.text }} />
    </Layout>
  )
}

export default IndexPage
