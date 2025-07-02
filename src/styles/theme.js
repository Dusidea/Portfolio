import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#607D8B", // bleu-gris pro
      dark: "#455A64", // version foncée pour hover
      light: "#CFD8DC", // très clair pour badges ou borders
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#90A4AE", // gris bleuté clair
      contrastText: "#000000",
    },
    background: {
      default: "#121212", // fond global
      paper: "#1E1E1E", // cartes, modales
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
