import { Button } from "@mui/material";

const MyButton = ({ href, children }) => (
  <Button
    variant="contained"
    component="a"
    href={href}
    size="large"
    sx={{
      textTransform: "none",
      fontWeight: "bold",
      bgcolor: "secondary.main",
      "&:hover": {
        bgcolor: "primary.dark",
      },
      mx: { xs: 0, sm: "10px" },
      px: { xs: 1.5, sm: 2.5 }, // padding horizontal responsive
      py: { xs: 0.8, sm: 1.2 }, // padding vertical responsive
      fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" }, // taille de texte responsive
      borderRadius: "12px",
      whiteSpace: "nowrap",
      color: "text.secondary",
    }}
  >
    {children}
  </Button>
);

export default MyButton;
