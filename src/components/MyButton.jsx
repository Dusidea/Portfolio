import Button from "@mui/material/Button";

const MyButton = ({ href, children }) => (
  <Button
    variant="contained"
    component="a"
    href={href}
    size="large"
    sx={{
      textTransform: "none",
      fontWeight: "bold",
      color: "secondary.contrastText",
      bgcolor: "secondary.main",
      "&:hover": {
        bgcolor: "primary.main",
        color: "primary.constrastText",
      },
      mx: { xs: 0, sm: "10px" },
      px: { xs: 2, sm: 3 }, // padding horizontal responsive
      py: { xs: 0.8, sm: 1.2 }, // padding vertical responsive
      fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" }, // taille de texte responsive
      borderRadius: "12px",
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </Button>
);

export default MyButton;
