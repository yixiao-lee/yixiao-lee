import Box from "@mui/material/Box"
import { makeStyles } from "@mui/styles";
import {Routes, Route} from 'react-router-dom';
import { Login } from './components/Login';
import { Logout } from "./components/Logout";
import { Profile } from './components/Profile';

const useStyles = makeStyles((theme) => ({
  slogan : {
    Height: '100vh',
    width: '100%',
    margin:'auto',
    paddingTop: "3em"
  }
}))

function App() {
  const classes = useStyles();
  return (
  <Box component="div" className={classes.slogan}>
    <Routes>
      <Route exact path="/" element={<Login />}/>
      <Route path="logout" element={<Logout />}/>
      <Route path="profile" element={<Profile />}/>
    </Routes>
  </Box>
  )
}

export default App;
