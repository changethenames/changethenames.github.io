import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import containerStyles from "./header.module.css"


const Header = ({ siteTitle }) => (
  // <header className={containerStyles.headerContainer}>
  //   <div className={containerStyles.header}>
      
  //   </div>
  // </header>
  <AppBar position='sticky'>
    <Toolbar>
      <Typography variant="h1" className={containerStyles.header}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
