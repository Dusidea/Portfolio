import { Box, Typography, Container, Button } from "@mui/material";

export default function Bio() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        padding: "25px",
        bgcolor: "primary.light",
        // border: 1,
        borderRadius: "15px",
        width: "50%",
      }}
    >
      <p>
        Développeuse web reconvertie après 10 ans d'expérience comme Customer
        Success.
      </p>
      <p>
        J'ai aidé mes collaborateurs et collaboratrices à s'épanouir dans leurs
        forces professionnelles. C'est aujourd'hui à mon tour de recentrer mes
        compétences sur ce qui m'amine le plus.
      </p>
      <p>
        Orientée client et expérimentée en entreprise, je peux assurer le
        développement des applications, du recueil du besoin à la mise en
        production sans perdre de vue les utilisateurs finaux.
      </p>
    </Box>
  );
}
