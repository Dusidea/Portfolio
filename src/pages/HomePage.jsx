import { Container, Stack } from "@mui/material";
import ProjectsList from "../components/ProjectsList";
import Bio from "../components/Bio";
import HeroHeader from "../components/Header";
import Nav from "../components/Nav";
import Skills from "../components/Skills";
import ContactForm from "../components/ContactForm";

function HomePage() {
  return (
    <Container
      maxWidth="false"
      sx={{
        bgcolor: "primary.dark",
        padding: "50px",
      }}
    >
      <Stack spacing={4}>
        <Nav />
        <HeroHeader />
        <Bio />
        <ProjectsList />
        <Skills />
      </Stack>
      <ContactForm />
    </Container>
  );
}
export default HomePage;
