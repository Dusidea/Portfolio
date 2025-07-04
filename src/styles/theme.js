import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#607D8B",
      dark: "#455A64",
      light: "#CFD8DC",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#90A4AE",
      contrastText: "#000000",
    },
    third: {
      light: "#FFE8DC",
      main: "#FFD7CD",
      dark: "#E6A68C",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
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
