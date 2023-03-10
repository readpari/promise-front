import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import { text } from "./text";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface Route {
  title: string;
  path: string;
}

const About: React.FC = (props) => {
  const [value, setValue] = React.useState(1);
  const [textLang, setTextLang] = React.useState(text["RU"]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setTextLang(text[Object.keys(text)[newValue]]);
  };

  const textRepl = [
    "Promise reader заставит вас читать",
    "От вас требуется всего 2 действия",
    "Выбрать книгу и сделать ставку",
    "Через сколько дней книга будет прочитана?",
    "Если успеете в срок, вернете свою ставку",
    "Если не успеете, то деньги сгорят",
    "Удачного чтения",
  ];
  const [replNum, setReplNum] = useState(0);
  const changeReplica = (bool: boolean) => {
    if (bool) {
      if (replNum < textRepl.length - 1) setReplNum(replNum + 1);
    } else {
      if (replNum > 0) setReplNum(replNum - 1);
    }
  };

  return (
    <>
      <Box sx={{ width: "80vw", bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {Object.keys(text).map((lang) => (
            <Tab key={lang} label={lang} />
          ))}
        </Tabs>
      </Box>

      <Paper
        elevation={3}
        sx={{
          p: 5,
          m: 3,
          background: "#1976d217",
          width: "80vw",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Fab
          color="inherit"
          sx={{ position: "absolute", top: "10px", left: "10px" }}
          aria-label="add"
          onClick={() => changeReplica(false)}
        >
          <KeyboardArrowLeftIcon />
        </Fab>
        <Fab
          color="inherit"
          aria-label="add"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={() => changeReplica(true)}
        >
          <KeyboardArrowRightIcon />
        </Fab>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          {textRepl[replNum]}
        </Typography>
      </Paper>
    </>
  );
};

export default About;
