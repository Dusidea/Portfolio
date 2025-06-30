import { Box, Typography, Container, Button } from "@mui/material";

export default function HeroHeader() {
  return (
    <Box
      component="header"
      sx={{
        // background:
        //   "linear-gradient(127deg,rgba(2, 132, 118, 1) 0%, rgba(0, 34, 28, 1) 100%)",
        bgcolor: "primary.dark",
        backgroundPosition: "center",
        color: "white",
        py: 8,
        textAlign: "center",
        borderRadius: "25px",
      }}
    >
      <Container component="section" maxWidth="md">
        <Typography component="h1" variant="h2" gutterBottom>
          Laurie Planès
        </Typography>
        <Typography component="p" variant="h5" gutterBottom>
          Développeuse web
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Voir plus
        </Button>
      </Container>
    </Box>
  );
}
