import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#607D8B", // grey-blue
      dark: "#455A64",
      light: "#CFD8DC",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#90A4AE", // light grey blue
      contrastText: "#000000",
    },
    background: {
      default: "#121212", // default background
      paper: "#1E1E1E", // cards and modal background
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#CCCCCC",
    },
    divider: "#333333",
  },

  typography: {
    fontFamily: `'Lato', sans-serif`,
    h1: {
      fontSize: "2.5rem",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
        }),
      },
    },
  },
});

export default theme;
