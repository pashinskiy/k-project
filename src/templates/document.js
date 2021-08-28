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
 * @module src/templates/document
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 * @param {Object} props.pageContext - объект контекста, передаваемый при формировании страницы
 */
export default IndexPage
