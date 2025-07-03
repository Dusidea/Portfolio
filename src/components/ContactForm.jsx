import { useState, useRef } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e5cav2c", // service ID
        "template_et3ftss", // templateID
        formRef.current,
        "P7Snp8NYOf8lIdfij" // public key
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          alert("Erreur lors de l’envoi : " + error.text);
        }
      );
  };

  return (
    <Box id="contact" sx={{ py: 5, mt: 8, scrollMarginTop: "64px" }}>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom>
          Contactez-moi
        </Typography>
        <form ref={formRef} onSubmit={sendEmail}>
          <TextField
            fullWidth
            label="Nom"
            name="from_name"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="from_email"
            type="email"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            margin="normal"
            required
          />
          <Box textAlign="center" mt={2}>
            <Button
              variant="contained"
              type="submit"
              aria-label="envoyer"
              sx={{
                color: "secondary.contrastText",
                "&:hover": {
                  boxShadow: "0 4px 10px rgba(255, 215, 205, 0.7)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Envoyer
            </Button>
          </Box>
        </form>

        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => setSuccess(false)}
        >
          <Alert
            onClose={() => setSuccess(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Message envoyé avec succès !
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
