import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from '../../res/images/shareacc_logo.svg';


const pages = ["Services", "Why Join?"];

const styles = {
  customizeToolbar: {
    height: 40,
  },
};



const NavbarUnauthenticated = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const appName = "ShareAcc";

const logoView = <img src={logo} alt="logo" height="24" width="24" style={{font:"#006D77"}}/>

  return (
    <AppBar position="sticky" color="common" variant="white" >
      <Container maxWidth="xl">
        <Toolbar disableGutters style={styles.customizeToolbar}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box 
            sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}
            display="flex" 
            alignItems="center"
            justifyContent="center"
          >
              {logoView}
              <Typography sx={{mx:2}} color='primary'>
                {appName}
              </Typography>
          </Box>
          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ flexGrow: 1, my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box 
            sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}
            display="flex" 
            alignItems="center"
            justifyContent="center"
          >
               {logoView}
              <Typography sx={{mx:2}} color='primary'>
                {appName}
              </Typography>
          </Box>

          <Button sx={{ flexGrow: 1, my: 2, color: "black", display: "block" }} href="/login">
            Log in
          </Button>
          <Button
            sx={{
              flexGrow: 1,
              my: 2,
              display: "block",
              backgroundColor: "#006D77",
              color: "white"
            }}
            href="/signup"
          >
            Try now for free
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavbarUnauthenticated;
