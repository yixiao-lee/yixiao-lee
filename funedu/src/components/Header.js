
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
  };

  const logout = () => {
    clearAuthCookies();
    setAnchorElUser(null);
    dispatch(resetUser());
    navigate("/");
  };

  // const chageStatusOnSuccessLogin = () => {
  //   countRef.current++;
  //   setIsAuth(true);
  //   setOpenSignin(false);
  //   setAnchorElUser(null);  
  // }

  // useEffect(() => {
  //   console.log("useEffect...");
  //   fetchUser().then((data) => {
  //     // console.log("effect data : " + JSON.stringify(data));
  //     dispatch(populateUser(data));
  //     // console.log("effect user : " + JSON.stringify(user));
  //     console.log("..." + data.userId);
  //     if (data.userId) {
  //       chageStatusOnSuccessLogin();      
  //     }
  //     console.log("exit useEffect...");
  //   });
  // }, [countRef])

  // console.log("user:" + JSON.stringify(user));

  // const handleSignin = async () => {
  //   if (loginName && pass) {
  //     const isOk = await toLogin(loginName, pass, 'AAdmin');
  //     if (isOk) {
  //         fetchUser().then((data) => {
  //         dispatch(populateUser(data))
  //         chageStatusOnSuccessLogin();
  //       }); 
  //       return    
  //     }
  //     setErrorMessage("Login failed!, please check the user name or password!");
  //   }
  // }

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
            {/* <Modal open={openSignin}>
            <Box component="form" className={classes.modalContainer}>
              <CloseIcon sx={{cursor: 'pointer', borderRadius:'0.5em', '&:hover': {
        color: 'red',
        backgroundColor: 'white',
      }}} onClick={() => setOpenSignin(false) }/>
              <Typography variant="h6" component="h2" sx={{ mt: '1em', alignSelf:'center'}}>
                Please <a href="#" onClick={() => setIsSignin(true)} >sign in</a> or <a href="#" onClick={() => setIsSignin(false)}>register</a> 
              </Typography>
              { !isSignin && 
              <TextField
                required
                label="Username"
                type="text"
                sx={{ mt: '1em', width: "95%", alignSelf:'center'}}
              />
              }
              { !isSignin  &&
              <TextField
                label="Avatar image url"
                type="text"
                sx={{ mt: '1em', width: "95%", alignSelf:'center'}}
              />
              }
              <TextField
                required
                label="Email"
                type="text"
                sx={{ mt: '1em', width: "95%", alignSelf:'center'}}
                onChange = {(e) => {
                  setLoginName(e.target.value);
                  setErrorMessage(null);
                }}
              />
              <TextField
                required
                label="Password"
                type="password"
                sx={{ mt: '1em', width: "95%", alignSelf:'center'}}
                onChange = {(e) => {
                  setPass(e.target.value);
                  setErrorMessage(null);
                }}
                helperText={errorMessage}
              />
              { !isSignin && 
              <TextField
                required
                label="Confirm password"
                type="password"
                sx={{ mt: '1em', width: "95%", alignSelf:'center'}}
              />
              } 
             { isSignin && 
              <Button variant="contained" 
              color="primary"
              sx={{ mt: '1em', width: "95%", alignSelf:'center'}}
              onClick={handleSignin}
              >
                Sign in
              </Button>
              } 

              { !isSignin && 
              <Button variant="contained" 
              color="primary"
              sx={{ mt: '1em', width: "95%", alignSelf:'center'}}
              >
                Register
              </Button>
             }
            </Box>
            </Modal> */}
          </Toolbar>
        {/* </Container> */}
      </AppBar>
  );
};

export default Header;
