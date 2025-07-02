import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { useTheme } from "@mui/material/styles";

import Stack from "@mui/material/Stack";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaWordpress,
  FaDatabase,
  FaSymfony,
} from "react-icons/fa";

import { motion } from "framer-motion";

const categories = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 color="#e44d26" />, level: 94 },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" />, level: 94 },
    { name: "JavaScript", icon: <FaJs color="#f0db4f" />, level: 70 },
  ],
  Backend: [
    { name: "PHP", icon: <FaPhp color="#777bb4" />, level: 90 },
    { name: "MySQL", icon: <FaDatabase color="#00758F" />, level: 75 },
    { name: "Symfony", icon: <FaSymfony color="black" />, level: 70 },
  ],
  CMS: [
    { name: "WordPress", icon: <FaWordpress color="#21759b" />, level: 80 },
  ],
};

export default function Skills() {
  const [tab, setTab] = useState(0);
  const theme = useTheme();
  const categoriesKeys = Object.keys(categories);

  return (
    <Box
      sx={{
        width: "100%",
        mt: 4,
      }}
    >
      <Typography variant="h2" sx={{ textAlign: "center", my: 4 }}>
        Mes compétences
      </Typography>
      <Box
        sx={{
          width: "100%",
          mt: 4,
          backgroundColor: "rgba(255,255,255,0.05)",
          borderRadius: 2,
          p: 1,
        }}
      >
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="secondary"
          sx={{
            ".MuiTab-root": {
              color: "#FFD7CD",
              "&.Mui-selected": {
                color: "inherit",
              },
            },
          }}
        >
          {categoriesKeys.map((key, i) => (
            <Tab key={i} label={key} />
          ))}
        </Tabs>

        {categoriesKeys.map((key, index) => (
          <Box
            role="tabpanel"
            hidden={tab !== index}
            key={index}
            sx={{ mt: 4, px: 2 }}
          >
            {tab === index && (
              <Stack spacing={3}>
                {categories[key].map((skill, i) => (
                  <Box key={i}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                        gap: 1,
                      }}
                    >
                      {skill.icon}
                      <Typography variant="body1" fontWeight="bold">
                        {skill.name}
                      </Typography>
                      <Typography variant="body2" ml="auto">
                        {skill.level}%
                      </Typography>
                    </Box>

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2 }}
                    >
                      <LinearProgress
                        aria-label={skill.name + " " + skill.level}
                        variant="determinate"
                        value={100}
                        sx={{
                          height: 10,
                          borderRadius: 5,
                          backgroundColor: theme.palette.grey[300],
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: theme.palette.primary.main,
                          },
                        }}
                      />
                    </motion.div>
                  </Box>
                ))}
              </Stack>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
