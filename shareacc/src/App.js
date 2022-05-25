import NavbarUnauthenticated from "./components/Navbar/NavbarUnauthenticated";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/space-grotesk"; // Defaults to weight 400.
import {getRoutes,getNavbar} from "./routes"
import { Helmet } from "react-helmet";

import { BrowserRouter as Router } from "react-router-dom";
import { getAuthenticatedUser  } from "./api/authService";
import { useCookies, CookiesProvider } from "react-cookie";
import { useState, useEffect } from "react";
import configData from "./config.json";




const theme = createTheme({
  typography: {
    fontFamily: ["Space Grotesk"].join(","),
    fontSize: 15,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#006D77",
    },
    secondary: {
      main: "#6495ED",
    },
    grey: {
      main: "#8C92AC",
    },
  },
});

function App() {

  const [authCookies] = useCookies(["Authorization"+configData.COOKIE_SUFFIX]);


  const authenticatedUser = () => {
    getAuthenticatedUser(authCookies.Authorization_shareacc, setCurrentUser);
  };
  const [currentUser, setCurrentUser] = useState({
    username: "",
    role: "",
  });

  useEffect(() => {
    authenticatedUser();
  }, []);

  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <Helmet>
            <title>ShareAcc</title>
          </Helmet>

          <Router>
            <div className="body">
              {getNavbar(currentUser.role)}
              {getRoutes(currentUser.role)}
              {/* <Footer /> */}
            </div>
          </Router>
        </div>
    </ThemeProvider>
  );
}

export default App;
