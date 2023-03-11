import * as React from "react";
import { AppLayout } from "../index";
import { Fragment, useCallback, useState } from 'react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import Navigation from "../Navigation/Navigation";

const Books: React.FC = (props) => {
  const renderSidebar = useCallback(() => {
    return <Navigation />;
  }, []);

  interface BetCounter {
    count: number;
    setCount: Function;
    header: string;
    step: number;
    ci: string;
  }

  const BetCounter = ({ count, setCount, header, step, ci }: BetCounter) => {
    const plus = () => {
      setCount(count + step);
    };
    const minus = () => {
      if (count >= 2 * step) setCount(count - step);
    };

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "20px", p: 3 }}>{header}</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "raw",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "13px",
          }}
        >
          <Box>
            <Fab color="primary" aria-label="remove" onClick={minus}>
              <RemoveIcon />
            </Fab>
          </Box>
          <Typography sx={{ display: "flex", justifyContent: "center", p: 3 }}>
            {count} {ci}
          </Typography>
          <Box>
            <Fab color="primary" aria-label="add" onClick={plus}>
              <AddIcon />
            </Fab>
          </Box>
        </Box>
      </Box>
    );
  };

  const BetWas = () => {
    const style = {
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper",
    };

    const betWasOptions = ["Hours", "Deadline", "Bet", "Timer"];
    return (
      <>
        <Typography sx={{ textAlign: "center" }} variant="h5" component="h5">
          Your bet
        </Typography>
        <List sx={style} component="nav" aria-label="mailbox folders">
          {betWasOptions.map((item) => (
            <Fragment key={item}>
              <ListItem>
                <ListItemText primary={item} />
                <ListItemText primary="123" sx={{ textAlign: "right" }} />
              </ListItem>
              <Divider />
            </Fragment>
          ))}
        </List>
      </>
    );
  };

  const renderContent = useCallback(() => {
    const [days, setDays] = useState(1);
    const [hours, setHours] = useState(1);
    const [betNear, setBetNear] = useState(10);

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
          <BetCounter
            step={1}
            ci={"hours"}
            count={hours}
            setCount={setHours}
            header={"How long are you going to read?"}
          />
          <BetCounter
            step={1}
            ci={"days"}
            count={days}
            setCount={setDays}
            header={"How many days will you need?"}
          />
          <BetCounter
            step={10}
            ci={"near"}
            count={betNear}
            setCount={setBetNear}
            header={"How much are you willing to bet?"}
          />
          <Button sx={{ width: "50px", m: 3 }} variant="contained">
            BET
          </Button>
        </Box>

        <BetWas />
      </>
    );
  }, []);

  return (
    <AppLayout
      title={"Bet"}
      renderSidebar={renderSidebar}
      renderContent={renderContent}
    />
  );
};

export default Books;
