import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function HeroHeader() {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: "primary.dark",
        backgroundPosition: "center",
        color: "white",
        py: { xs: 6, md: 8 },
        textAlign: "center",
        borderRadius: "25px",
        overflow: "hidden",
      }}
    >
      <Container component="section" maxWidth="md">
        <Typography component="h1" variant="h2" gutterBottom>
          Laurie Planès
        </Typography>

        <Typography component="p" variant="h5" gutterBottom>
          Développeuse web
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mt: 3,
          }}
        >
          <Link
            href="https://github.com/Dusidea"
            target="_blank"
            rel="noopener"
            color="inherit"
            title="Voir mon GitHub"
          >
            <IconButton
              aria-label="Voir mon profil Github"
              color="inherit"
              sx={{
                transition: "color 0.3s",
                "&:hover": {
                  color: "secondary.main",
                  boxShadow: "0 8px 20px rgba(255, 215, 205, 0.7)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Link>

          <Link
            href="https://www.linkedin.com/in/laurieplanes/"
            target="_blank"
            rel="noopener"
            color="inherit"
            title="Voir mon LinkedIn"
          >
            <IconButton
              aria-label="Voir mon LinkedIn"
              color="inherit"
              sx={{
                transition: "color 0.3s",
                "&:hover": {
                  color: "secondary.main",
                  boxShadow: "0 8px 20px rgba(255, 215, 205, 0.7)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Link>

          <Link
            href="mailto:laurie.planes@gmail.com"
            color="inherit"
            title="Me contacter par email"
          >
            <IconButton
              aria-label="Me contacter par email"
              color="inherit"
              sx={{
                transition: "color 0.3s",
                "&:hover": {
                  color: "secondary.main",
                  boxShadow: "0 8px 20px rgba(255, 215, 205, 0.7)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <EmailIcon fontSize="large" />
            </IconButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
