import React from 'react'
import Box from "@mui/material/Box"
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  slogan : {
    Height: '100%',
    paddingTop: "50vh",
    paddingLeft: "2%",
    paddingRight: "2%",
    fontSize: "2.8em",
    fontWeight: 500,
    color: "#ff4500",
    fontFamily: "sans-serif"
  }
}))
const Main = () => {
    const classes = useStyles();
    return (
    <Box component="div" className={classes.slogan}>
      Only with an approved leave slip can you go where the poems and distances in your dreams are!
    </Box>
    )
}

export default Main
