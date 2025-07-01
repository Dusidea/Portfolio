import { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import Project from "./Project";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-900
  const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // >900px

  let columns = 1;
  if (isSm) columns = 2;
  else if (isMdUp) columns = 3;

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "/projects.json")
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <Box id="projects">
      <Typography variant="h2" sx={{ textAlign: "center", my: 4 }}>
        Mes réalisations
      </Typography>
      <Masonry columns={columns} spacing={3}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </Masonry>
    </Box>
  );
}
