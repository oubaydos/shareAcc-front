import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { styled, useTheme } from "@mui/material/styles";

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import MenuIcon from '@mui/icons-material/Menu';
import { goto } from "../../utils/utils";
import logo from '../../res/images/shareacc_logo.svg';
// import {logOut} from  "../../service/authentication";



const pages = [
  { name: 'Home', path: "/" },
  { name: 'Offers', path: "/offers" },
  { name: 'Settings', path: "/settings" },
  { name: 'Profile', path: "/" }
]

const settings = ['Profile', 'Logout'];

const logoView = <img src={logo} alt="logo" height="24" width="24" style={{font:"#006D77"}}/>



const NavbarAuthenticated = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const [open, setOpen] = React.useState(false);

  const handleOpenNavMenu = () => {
    setOpen(true)
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setOpen(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickUserMenu = (event) => {
    console.log(event.target)
    switch (event.target.innerHTML) {
      case "Logout":
        console.log("logging out...");
        // logOut();

        // logOut();
        break;
      default:

        break;
    }
  }
  const handleClickNavItem = (page) => {
    console.log(page)
    goto(page.path)
  }

  return (
    <AppBar position="absolute" className="nav-bar" color="common" variant="white">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          {logoView}
          <Typography
            color="primary"
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 30, ml: 2, display: { xs: 'none', md: 'flex' } }}
            fontWeight="550"
          >
            UpCoach
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleClickNavItem(page)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            fontWeight="550"
          >
            UpCoach
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleClickNavItem(page)}
                sx={{ my: 2, mx: 1, px: 3, color: 'black', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">

              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

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
                <MenuItem name={setting} key={setting} onClick={handleClickUserMenu}>
                  <Typography textAlign="center" >{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavbarAuthenticated;
