import React from 'react'
import Box from "@mui/material/Box"
import { makeStyles } from "@mui/styles";
import {Routes, Route} from 'react-router-dom';
import { Login } from './Login';
import { Profile } from './Profile';

const useStyles = makeStyles((theme) => ({
  slogan : {
    Height: '100%',
    paddingTop: "3em",
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
    const Home = () => (<p>
      Only with an approved leave slip can you go where the poems and distances in your dreams are!
      </p>)
    return (
    <Box component="div" className={classes.slogan}>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="home" element={<Home />}/>
        <Route path="profile" element={<Profile />}/>
      </Routes>
    </Box>
    )
}

export default Main
