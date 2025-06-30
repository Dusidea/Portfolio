import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import MyButton from "./MyButton";

export default function Project({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <Card
          key={project.id}
          sx={{
            bgcolor: "primary.light",
            // "&:hover": {
            //   bgcolor: "secondary.main",
            // },
            minWidth: "40%",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              // height="140"
              image={project.preview}
              alt="project preview"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <MyButton
              // variant="outlined"
              // size="large"
              // color="text.primary"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              // sx={{
              //   "&:hover": {
              //     bgcolor: "secondary.main",
              //   },
              // }}
            >
              Voir le projet
            </MyButton>
            <MyButton
              // size="large"
              // color="text.primary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              // sx={{
              //   "&:hover": {
              //     bgcolor: "secondary.main",
              //   },
              // }}
            >
              Code source
            </MyButton>
            {/* <Button
              variant="outlined"
              size="large"
              color="text.primary"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                "&:hover": {
                  bgcolor: "secondary.main",
                },
              }}
            >
              Voir le projet
            </Button>
            <Button
              size="large"
              color="text.primary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                "&:hover": {
                  bgcolor: "secondary.main",
                },
              }}
            >
              Code source
            </Button> */}
          </CardActions>
        </Card>
      ))}
    </>
  );
}

{
  /* <Box
          key={project.id}
          sx={{
            boxShadow: 1,
            borderRadius: "25px",
            padding: "25px",
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "secondary.main",
            },
          }}
        ></Box> */
}
