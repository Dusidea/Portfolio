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
  FaReact,
  FaDatabase,
  FaSymfony,
  FaJira,
  FaTrello,
  FaNodeJs,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";
import { FaRightLeft } from "react-icons/fa6";
import { RiNotionFill } from "react-icons/ri";

import { motion } from "framer-motion";

const categories = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 />, level: 94 },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
    { name: "JavaScript", icon: <FaJs />, level: 70 },
    { name: "React", icon: <FaReact />, level: 85 },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, level: 60 },
    { name: "MySQL", icon: <FaDatabase />, level: 75 },
    { name: "Symfony", icon: <FaSymfony />, level: 40 },
    { name: "API REST", icon: <FaRightLeft />, level: 60 },
  ],

  Organization: [
    { name: "Notion", icon: <RiNotionFill />, level: 90 },
    { name: "Jira", icon: <FaJira />, level: 95 },
    { name: "Trello", icon: <FaTrello />, level: 95 },
    { name: "Github", icon: <FaGithub />, level: 90 },
    { name: "Gitlab", icon: <FaGitlab />, level: 70 },
  ],
};

export default function Skills() {
  const [tab, setTab] = useState(0);
  const theme = useTheme();
  const categoriesKeys = Object.keys(categories);

  return (
    <Box
      id="skills"
      sx={{
        width: "100%",
        mt: 4,
        scrollMarginTop: "64px",
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
