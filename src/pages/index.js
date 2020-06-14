import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Data from "../components/data"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";
import containerStyles from "./index.module.css"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#373737',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffff6b',
      main: '#fdd835',
      dark: '#c6a700',
      contrastText: '#000',
    },
  },
});


const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <Container fixed>
        <Data />
      </Container>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
