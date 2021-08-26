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

/**
 * Шаблон страницы документа
 * @module templates/document
 * @param {Object} - свойства:
 * pageContext - объект контекста, передаваемый при формировании страницы
 */
export default IndexPage
