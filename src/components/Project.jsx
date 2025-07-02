import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import MyButton from "./MyButton";

export default function Project({ project }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
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
        <MyButton
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
            width: "100%",
          }}
        >
          Voir le projet
        </MyButton>
        <MyButton
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
            width: "100%",
          }}
        >
          Code source
        </MyButton>
      </CardActions>
    </Card>
  );
}
