import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimePicker from "./components/TimePicker/TimePicker";

const Books: React.FC = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "20px", p: 3 }}>
          {"How long are you going to read"}
        </Typography>

        <TimePicker onBet={console.log} />
      </Box>
    </>
  );
};

export default Books;
