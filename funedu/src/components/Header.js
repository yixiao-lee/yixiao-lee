
import React, { useState } from "react";
import { SiKhanacademy } from "react-icons/si";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux'
import { resetUser } from "../slices/userSlice";

import { makeStyles } from "@mui/styles";
import { clearAuthCookies } from "../utils/LocalHelper";
import { useNavigate } from "react-router-dom";
// import { spacing } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  toolbar : {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo : {
    display: "flex",
    alignItems: "center",
    marginLeft: 8,
  },
  e_char: {
    color: "#ff4500",
  },
  modalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    maxWidth: "50em", 
    minWidth: "20em",
    backgroundColor: "#ddd",
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    borderRadius: '0.5em',
    
  }
}))

const Header = () => {
  console.log("into header...");
  let navigate = useNavigate();
  const classes = useStyles();
  const user = useSelector((state) => state.userReducer.value);
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const showProfile = () => {
    // TODO show profle page 
    setAnchorElUser(null);
    navigate("/profile");
  };

  const logout = () => {
    clearAuthCookies();
    setAnchorElUser(null);
    dispatch(resetUser());
    navigate("/");
  };

  return (
      <AppBar position="sticky" sx={{
        width:'100%',
        height: '4em'
      }}>
        {/* <Container> */}
          <Toolbar className={classes.toolbar}>
            <Box component="div" className={classes.logo}>
              <SiKhanacademy size = "38" color = "orangered" />
              <Typography variant="h5" sx={{ml:1, fontWeight: 500}}>
                Fun <span className={classes.e_char}>E</span>ducation
              </Typography>
            </Box>  
            <Box component="div" >
              {/* <Tooltip title="Open settings"> */}
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginRight: 2}}>
                  <Avatar alt={user.userName} src={user.avatar} sx={{ width: 36, height: 36 }}/>
                </IconButton>
              {/* </Tooltip> */}
              { user.userId && 
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key="1" onClick={showProfile}>
                    <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem key="2" onClick={logout}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            }
            </Box>
          </Toolbar>
        {/* </Container> */}
      </AppBar>
  );
};

export default Header;
