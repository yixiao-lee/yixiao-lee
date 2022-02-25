
import React, { useState, useEffect } from "react";
import "./Header.css";
import { SiKhanacademy } from "react-icons/si";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux'
import { populateUser } from "../slices/userSlice";

const Header = () => {

  const user = useSelector((state) => state.userReducer.value)
  const dispatch = useDispatch()
  const settings = ['Profile', 'Logout'];
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Box component="div" sx={{ flexGrow: 1, display: "flex", ml:1 }}>
              <SiKhanacademy size = "38" color = "orangered" />
              <Typography
                variant="h5"
                noWrap
                sx = {{ml:1, fontWeight: 500}}
              >
                Fun <span className="header_e_char">E</span>ducation
              </Typography>
            </Box>  
            <Box sx={{ flexGrow: 0 }}>
              {/* <Tooltip title="Open settings"> */}
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="https://picsum.photos/id/3/80/80" />
                </IconButton>
              {/* </Tooltip> */}
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
};

export default Header;
