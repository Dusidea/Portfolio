import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { ListSubheader } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default function Skills() {
  return (
    <List
      sx={{ width: "30%" }}
      subheader={
        <ListSubheader sx={{ bgcolor: "primary.dark" }}>Outils</ListSubheader>
      }
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Icone VsCode" src="../assets/vscode.svg" />
        </ListItemAvatar>
        <ListItemText>VsCode</ListItemText>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Icone VsCode" src="" />
        </ListItemAvatar>
        <ListItemText>Git</ListItemText>
      </ListItem>
    </List>
  );
}
