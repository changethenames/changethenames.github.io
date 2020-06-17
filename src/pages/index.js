import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Data from "../components/data"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Container, Typography, Link } from "@material-ui/core";
import lightBlue from '@material-ui/core/colors/lightBlue';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#373737',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6659',
      main: '#d32f2f',
      dark: '#9a0007',
      contrastText: '#fff',
    },
  },
});

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <Container fixed>
        <Typography style={{ marginTop: '15px' }}>
          Welcome to <b>Change the Names</b>, where you can find many{' '}
          <Link href="https://change.org" style={{color: lightBlue.A700}}>change.org</Link> petitions for changing problematic street, school, park, etc. names
          as well as well as write emails to send to the appropriate sources.
        </Typography>
        <Data />
      </Container>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
