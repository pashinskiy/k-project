import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./src/templates/theme.js"
import ClientOnly from "./src/clientOnly.js"
import { CssBaseline } from "@material-ui/core"

import Layout from "./src/components/layout"

export default function MuiRootWrapper({ element }) {
  try {
    return (
      <ClientOnly>
        <ThemeProvider theme={theme}>
          <Layout>
            <CssBaseline />
            {element}
          </Layout>
        </ThemeProvider>
      </ClientOnly>
    )
  } catch (e) {
    return (
      <ClientOnly>
        <ThemeProvider theme={theme}>
          <Layout>
            <CssBaseline />
            {element}
          </Layout>
        </ThemeProvider>
      </ClientOnly>
    )
  }
}
