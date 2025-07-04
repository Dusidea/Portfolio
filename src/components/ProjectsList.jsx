import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Project from "./Project";
import ProjectSkeleton from "./ProjectSkeleton";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  let columns = 1;
  if (isSm) columns = 2;
  else if (isMdUp) columns = 3;

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "/data/projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement");
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Format inattendu");
        setProjects(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erreur de chargement :", err);
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <Typography color="error">Erreur : {error.message}</Typography>;
  }

  return (
    <Box id="projects" sx={{ scrollMarginTop: "64px" }}>
      <Typography variant="h2" sx={{ textAlign: "center", my: 4 }}>
        Mes réalisations
      </Typography>
      <Masonry columns={columns} spacing={3}>
        {/* Displaying skeleton placeholder while loading */}
        {isLoading
          ? Array.from({ length: columns * 2 }).map((_, index) => (
              <ProjectSkeleton key={index} />
            ))
          : projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
      </Masonry>
    </Box>
  );
}
