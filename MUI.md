# Utiliser MUI pour le style

MUI fournit un thème de base (couleurs, polices, espacements, etc)

## Personnaliser le thème

pour personnaliser le thème il faut le redéfinir dans theme.js

## Utiliser le thème

Pour appeler le thème il faut utiliser themeProvider dans app ou main.jsx

```
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Applique une base CSS propre */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
```

Ensuite les objects MUI héritent des propriétés du thème (box, typography , etc). Attention ce n'est pas le cas des éléments html de base (div etc),

Variante : styliser un Box ou un div de base

```
const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));
```

Et dans ton JSX :

```
<Wrapper>
  <Typography>Contenu dans un bloc stylé avec le thème</Typography>
</Wrapper>
```

Utilise les composants MUI dès que possible.

Ne précise la couleur que si tu veux changer celle par défaut du thème.

Le style dans le JS avec sx est totalement recommandé avec MUI.

Tu peux centraliser des styles avec styled() si tu veux les réutiliser souvent.

## Responsive

https://mui.com/material-ui/guides/responsive-ui/

### Breakpoints

Default breakpoints

Each breakpoint (a key) matches with a fixed screen width (a value):

- xs, extra-small: 0px
- sm, small: 600px
- md, medium: 900px
- lg, large: 1200px
- xl, extra-large: 1536px

https://mui.com/material-ui/customization/breakpoints/

### useMediaQuery

https://mui.com/material-ui/react-use-media-query/
