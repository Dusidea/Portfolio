import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Skills from "../components/Skills";

import Project from "./Project";
import Typography from "@mui/material/Typography";
import Masonry from "@mui/lab/Masonry";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <Box id="projects">
      <Typography variant="h2">Mes projets</Typography>
      <Masonry spacing={5}>
        <Project projects={projects} />
        <Skills />
      </Masonry>
    </Box>
  );
}
