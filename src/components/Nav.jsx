import { AppBar, Toolbar } from "@mui/material";
import MyButton from "./MyButton";

export default function Nav() {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{}}>
        <MyButton href="#about">À propos</MyButton>
        <MyButton href="#projects">Mes réalisations</MyButton>
      </Toolbar>
    </AppBar>
  );
}
