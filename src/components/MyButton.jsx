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
      mx: "10px",
      color: "text.secondary",
    }}
  >
    {children}
  </Button>
);

export default MyButton;
