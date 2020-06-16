import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Typography } from "@material-ui/core";
import Entry from './entry';

import containerStyles from './data.module.css';

const Data = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            state
            values {
              value
              petitionLink
              emails
              talkingPoints
              city
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allDataJson.edges.map(edge => (
        <div key={edge.node.state}>
          <Typography variant='h2' className={containerStyles.state}>{edge.node.state}</Typography>
          <div>
            {edge.node.values.map(value => (
              <Entry {...value} key={value.value}/>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default Data;
