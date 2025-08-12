import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Bio() {
  const theme = useTheme();
  const itemData = [
    {
      img: `${import.meta.env.BASE_URL}assets/hk.webp`,
      title: "Image 1",
      // rows: 2,
      cols: 4,
    },

    {
      img: `${import.meta.env.BASE_URL}assets/hades.webp`,
      title: "Image 3",
      cols: 4,
    },
    {
      img: `${import.meta.env.BASE_URL}assets/tunic.webp`,
      title: "Image 4",
      cols: 3,
    },
    {
      img: `${import.meta.env.BASE_URL}assets/horizon1.webp`,
      title: "Image 4",
      cols: 3,
    },
  ];
  return (
    <Box id="about" component="section">
      <Typography variant="h2" sx={{ textAlign: "center", my: 4 }}>
        A propos
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: 5,
          p: 2,
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            scrollMarginTop: "64px",
            padding: "25px",
            background: `linear-gradient(
  135deg,
  ${theme.palette.third.light} 30%,
  ${theme.palette.third.main} 60%,
  ${theme.palette.third.dark} 90%
)`,
            color: "secondary.contrastText",
            borderRadius: "15px",
            display: "flex", // ← pour aligner le contenu à l’intérieur
            flexDirection: "column",

            padding: "25px",

            // maxWidth: "500px",
            margin: "16px",
          }}
        >
          <p>
            Développeuse web issue d’une reconversion après 10 ans en tant que
            Customer Success Manager.
          </p>
          <p>
            Formée au développement front-end, je mobilise mon sens du service
            client, mon expérience d’équipe et mes compétences en gestion de
            projet pour créer des interfaces web performantes, accessibles et
            centrées utilisateur.
          </p>
        </Box>
        <ImageList
          // sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item, index) => (
            <ImageListItem
              key={index}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
