/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, lang, meta }) {
  const { site, prismicSeo } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        prismicSeo {
          data {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription =
    description || prismicSeo.data.description || site.siteMetadata.description
  const defaultTitle = prismicSeo.data.title || site.siteMetadata?.title

  meta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata?.author || ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
    },
    {
      name: "google-site-verification",
      content: "h0sZRVPsiT5-wQb4UL76oaSs9AEb9g_fyBrT1XYKnn8",
    },
  ].concat(meta)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
    >
      {meta.map(item => (
        <meta name={item.name} content={item.content} />
      ))}

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <script src="https://backend.demo.revoup.ru/javascripts/iframe/v2/revoiframe.js"></script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `ru`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

/**
 * Компонент настройки параметров seo
 * @module src/components/seo
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.description - описание сайта
 * @param {String} props.lang - язык
 * @param {Object[]} props.meta  - массив настроек meta
 * @param {String} props.title - заголовок страницы
 */
export default SEO
