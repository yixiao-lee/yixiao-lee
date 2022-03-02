import React from 'react'
import Box from "@mui/material/Box"
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  slogan : {
    paddingTop: "50vh",
    paddingLeft: "1%",
    paddingRight: "1%",
    fontSize: "2.9em",
    fontWeight: 600,
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
