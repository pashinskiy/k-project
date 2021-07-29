import * as React from "react"

const IndexPage = ({ pageContext: { content } }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default IndexPage
