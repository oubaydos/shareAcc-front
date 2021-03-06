import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/space-grotesk"; // Defaults to weight 400.
import {getRoutes,getNavbar} from "./routes"
import { Helmet } from "react-helmet";

import { BrowserRouter as Router } from "react-router-dom";
import { getAuthenticatedUser  } from "./api/authService";
import { useCookies} from "react-cookie";
import { useState, useEffect } from "react";

import applicationTheme from "./theme"

const theme = createTheme(applicationTheme);

function App() {

  const [authCookies] = useCookies(["Authorization"]);


  const authenticatedUser = () => {
    getAuthenticatedUser(authCookies.Authorization, setCurrentUser);
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
