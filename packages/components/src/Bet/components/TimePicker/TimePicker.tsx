import * as React from "react";
import { useCallback, useState } from "react";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { isValid, intervalToDuration } from "date-fns";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Typography,
} from "@mui/material";

interface Props {
  onBet: React.Dispatch<Date>;
}
const TimePicker: React.FC<Props> = (props) => {
  const [selectedDate, setSelectedDate] = useState<Date>(null);

  const handleBet = useCallback(() => {
    if (!selectedDate) {
      return null;
    }

    props.onBet(selectedDate);
  }, [selectedDate]);

  const renderDuration = useCallback(() => {
    if (!isValid(selectedDate)) {
      return "NA";
    }

    const duration = intervalToDuration({
      start: new Date(),
      end: selectedDate,
    });

    const hours = duration.hours;
    const minutes = duration.minutes;

    return (
      <>
        <span>
          {hours} hour{hours !== 1 ? "s" : null}
        </span>
        &nbsp;
        <span>
          {minutes} minute{minutes !== 1 ? "s" : null}
        </span>
      </>
    );
  }, [selectedDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ maxWidth: 275 }}>
        <DateTimeField
          sx={{ maxWidth: 275, minWidth: "100%", mb: 1 }}
          onChange={setSelectedDate}
          disablePast={true}
          ampm={false}
          label={"deadline"}
          inputMode={"numeric"}
        />

        <Collapse in={isValid(selectedDate)}>
          <Card variant={"elevation"}>
            <CardContent>
              <Typography variant="h5" component="div">
                I will read for
              </Typography>
              <Typography sx={{ mb: "5px" }} color="text.secondary">
                {renderDuration()}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                тут будет находиться описание ставки и согласие с правилами +
                ссылка на правила
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={handleBet}>Bet</Button>
            </CardActions>
          </Card>
        </Collapse>
      </Box>
    </LocalizationProvider>
  );
};

export default TimePicker;
