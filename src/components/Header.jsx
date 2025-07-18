import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { motion } from "framer-motion";
import TypedIntro from "./TypedIntro";

export default function HeroHeader() {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: "primary.dark",
        color: "white",
        py: { xs: 6, md: 8 },
        textAlign: "center",
        borderRadius: "25px",
        overflow: "hidden",
        px: 2,
      }}
    >
      <Container component="section" maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            component="h1"
            variant="h2"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Laurie Planès
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <TypedIntro />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              mt: 4,
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
                  transition: "all 0.3s",
                  "&:hover": {
                    color: "secondary.main",
                    boxShadow: "0 8px 20px rgba(255, 215, 205, 0.7)",
                    transform: "translateY(-4px) scale(1.1)",
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
                  transition: "all 0.3s",
                  "&:hover": {
                    color: "secondary.main",
                    boxShadow: "0 8px 20px rgba(255, 215, 205, 0.7)",
                    transform: "translateY(-4px) scale(1.1)",
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
                  transition: "all 0.3s",
                  "&:hover": {
                    color: "secondary.main",
                    boxShadow: "0 8px 20px rgba(255, 215, 205, 0.7)",
                    transform: "translateY(-4px) scale(1.1)",
                  },
                }}
              >
                <EmailIcon fontSize="large" />
              </IconButton>
            </Link>
            <Link
              href={`${import.meta.env.BASE_URL}/assets/Laurie_PLANES_CV.pdf`}
              target="_blank"
              rel="noopener"
              color="inherit"
              title="Télécharger mon CV"
            >
              <IconButton
                aria-label="Télécharger mon CV"
                color="inherit"
                sx={{
                  transition: "all 0.3s",
                  "&:hover": {
                    color: "secondary.main",
                    boxShadow: "0 8px 20px rgba(255, 215, 205, 0.7)",
                    transform: "translateY(-4px) scale(1.1)",
                  },
                }}
              >
                <FileDownloadIcon fontSize="large" />
              </IconButton>
            </Link>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
