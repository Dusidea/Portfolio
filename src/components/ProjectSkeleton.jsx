import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Skeleton from "@mui/material/Skeleton";

export default function ProjectSkeleton() {
  return (
    <Card
      sx={{
        bgcolor: "primary.light",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea>
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            height: { xs: 140, sm: 180, md: 220 },
          }}
        />
        <CardContent>
          <Skeleton
            variant="text"
            sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" }, mb: 1 }}
            width="80%"
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: { xs: "0.85rem", sm: "0.95rem" }, mb: 0.5 }}
            width="90%"
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: { xs: "0.85rem", sm: "0.95rem" } }}
            width="60%"
          />
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
        <Skeleton
          variant="rectangular"
          width="100%"
          height={36}
          sx={{ borderRadius: 1 }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={36}
          sx={{ borderRadius: 1 }}
        />
      </CardActions>
    </Card>
  );
}
