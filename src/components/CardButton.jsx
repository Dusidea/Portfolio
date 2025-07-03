import Button from "@mui/material/Button";

const CardButton = ({ href, children }) => (
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
        boxShadow: "0 4px 10px rgba(255, 215, 205, 0.7)",
        transform: "translateY(-2px)",
      },
      mx: { xs: 0, sm: "10px" },
      px: { xs: 2, sm: 3 },
      py: { xs: 0.8, sm: 1.2 },
      fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
      borderRadius: "12px",
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </Button>
);

export default CardButton;
