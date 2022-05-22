import NavbarUnauthenticated from "./components/NavbarUnauthenticated/NavbarUnauthenticated";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/space-grotesk"; // Defaults to weight 400.
import backgroundImage from "./res/images/background_image.jpg";

const styles = {
  appBody: {
    minHeight: "100vh",
    backgroundColor: "rgba(255, 255, 255,0.5)",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.5)",
  },
};

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
      <NavbarUnauthenticated/>
      <div style={styles.appBody}></div>
    </ThemeProvider>
  );
}

export default App;
