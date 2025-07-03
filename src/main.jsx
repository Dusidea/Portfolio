import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { ParallaxProvider } from "react-scroll-parallax";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";
import theme from "./styles/theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParallaxProvider>
        <BrowserRouter basename="/Portfolio/">
          <App />
        </BrowserRouter>
      </ParallaxProvider>
    </ThemeProvider>
  </StrictMode>
);
