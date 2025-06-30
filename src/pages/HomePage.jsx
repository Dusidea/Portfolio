import { Container, Stack } from "@mui/material";
import ProjectsList from "../components/ProjectsList";
import Bio from "../components/Bio";
import HeroHeader from "../components/Header";
import Nav from "../components/Nav";

function HomePage() {
  return (
    <Container
      maxWidth="false"
      sx={{
        bgcolor: "primary.dark",

        // padding: "50px",
      }}
    >
      <Stack
        spacing={4}
        // alignItems="center"
      >
        <Nav />
        <HeroHeader />
        <Bio />
        <ProjectsList />
      </Stack>
    </Container>
  );
}
export default HomePage;
