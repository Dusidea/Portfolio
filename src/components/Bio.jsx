import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Bio() {
  return (
    <Box id="about" component="section">
      <Typography variant="h2" sx={{ textAlign: "center", my: 4 }}>
        A propos
      </Typography>
      <Box
        sx={{
          scrollMarginTop: "64px",
          padding: "25px",
          bgcolor: "secondary.main",
          color: "secondary.contrastText",
          borderRadius: "15px",
        }}
      >
        <p>
          Développeuse web reconvertie après 10 ans d'expérience comme Customer
          Success.
        </p>
        <p>
          J'ai aidé mes collaborateurs et collaboratrices à s'épanouir dans
          leurs forces professionnelles. C'est aujourd'hui à mon tour de
          recentrer mes compétences sur ce qui m'amine le plus.
        </p>
        <p>
          Orientée client et expérimentée en entreprise, je peux assurer le
          développement des applications, du recueil du besoin à la mise en
          production sans perdre de vue les utilisateurs finaux.
        </p>
        <p>
          Mes points forts : event-driven programming, responsive design,
          gestion d'état (Redux)
        </p>
      </Box>
    </Box>
  );
}
