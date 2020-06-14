/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { BottomNavigation, BottomNavigationAction, Link } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import Header from "./header"
import "./layout.css"

const issueLink = "https://github.com/changethenames/changethenames.github.io/issues/new/choose";

const useStyles = makeStyles((theme) => ({
  bottomBar: {
    backgroundColor: theme.palette.primary.main,
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  actionItem: {
    color: theme.palette.primary.contrastText
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <BottomNavigation showLabels className={classes.bottomBar}>
        <BottomNavigationAction classes={{root: classes.actionItem}} label="Add new petition" icon={<AddIcon />} component={Link} href={issueLink} />
      </BottomNavigation>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
