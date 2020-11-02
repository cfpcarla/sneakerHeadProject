import React, { useState } from "react";
import "./App.css";
import { theme } from "./styles/theme";
import { Box, ThemeProvider } from "@material-ui/core";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Ranking from "./components/Ranking";
import { HOME, ABOUT, TOP10, BLOG, CONNECT } from "./controller/nav-controller";
import Footer from "./components/footer";

function App() {
  //SET WHICH TAB YOU WANT TO WORK IN
  const [display, setDisplay] = useState(HOME);
  return (
    <ThemeProvider theme={theme}>
      <Navigation setDisplay={setDisplay}></Navigation>
      <div>
        <Box display={display === HOME ? "block" : "none"}>
          <Home setDisplay={setDisplay} />
        </Box>
        <Box display={display === ABOUT ? "block" : "none"}>
          <About />
        </Box>
        <Box display={display === TOP10 ? "block" : "none"}>
          <Ranking />
        </Box>
        <Box display={display === BLOG ? "block" : "none"}>
          <Blog />
        </Box>
        <Box display={display === CONNECT ? "block" : "none"}>
          <Contact />
        </Box>
      </div>
      <Footer setDisplay={setDisplay} />
    </ThemeProvider>
  );
}

export default App;
