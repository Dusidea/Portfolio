import Button from "@mui/material/Button";

const NavButton = ({ href, children }) => (
  <Button
    variant="text"
    component="a"
    href={href}
    size="large"
    sx={{
      color: "primary.contrastText",
      mx: { xs: 0, sm: "10px" },
      px: { xs: 2, sm: 3 },
      py: { xs: 0.8, sm: 1.2 },
      fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
      whiteSpace: "nowrap",
      "&:hover": {
        transform: "translateY(-2px)",
        color: "#FFD7CD",
        backgroundColor: "transparent",
      },
    }}
  >
    {children}
  </Button>
);

export default NavButton;
