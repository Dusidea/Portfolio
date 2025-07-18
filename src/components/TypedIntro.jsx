import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Typography from "@mui/material/Typography";

export default function TypedIntro() {
  const el = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(el.current, {
      strings: [
        "Développeuse web.",
        "10 ans d’expérience en relation client.",
        "Toujours curieuse d'apprendre.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <Typography
      component="p"
      variant="h5"
      gutterBottom
      sx={{ minHeight: "48px" }}
    >
      <span ref={el} />
    </Typography>
  );
}
