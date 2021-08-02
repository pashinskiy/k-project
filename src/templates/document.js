import * as React from "react"
import SEO from "../components/seo"

const IndexPage = ({ pageContext: { content } }) => {
  return (
    <>
      <SEO title={""} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export default IndexPage
