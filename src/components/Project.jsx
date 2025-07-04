import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CardButton from "./CardButton";

export default function Project({ project }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 8px 20px rgba(255, 215, 205, 0.7)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={import.meta.env.BASE_URL + project.preview}
          alt={project.title + " preview"}
          loading="lazy"
          sx={{
            width: "100%",
            height: { xs: 140, sm: 180, md: 220 },
            objectFit: "cover",
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.85rem", sm: "0.95rem" },
            }}
          >
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 1,
          alignItems: "stretch",
          p: 2,
        }}
      >
        <CardButton
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: "100%",
          }}
        >
          Voir le projet
        </CardButton>
        <CardButton
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: "100%",
          }}
        >
          Code source
        </CardButton>
      </CardActions>
    </Card>
  );
}
