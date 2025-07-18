import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import ProjectsList from "../components/ProjectsList";
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

        <ProjectsList />
        <Skills />
      </Stack>
      <ContactForm />
    </Container>
  );
}
export default HomePage;
