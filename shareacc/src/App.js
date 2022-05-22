import NavbarUnauthenticated from "./components/NavbarUnauthenticated/NavbarUnauthenticated";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/space-grotesk"; // Defaults to weight 400.
import getRoutes from "./routes"
import { Helmet } from "react-helmet";

import { BrowserRouter as Router } from "react-router-dom";


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
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <Helmet>
            <title>DevOpsify</title>
          </Helmet>

          <Router>
            <div className="body">
              <NavbarUnauthenticated />
              {getRoutes("GUEST")}
              {/* <Footer /> */}
            </div>
          </Router>
        </div>
    </ThemeProvider>
  );
}

export default App;
