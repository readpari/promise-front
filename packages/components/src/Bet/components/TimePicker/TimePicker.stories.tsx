import * as React from "react";
import TimePicker from "./TimePicker";
import { action } from "@storybook/addon-actions";

export default {
  title: "TimePicker",
  component: TimePicker,
};

export const Primary = () => {
  return <TimePicker onBet={action("onBet")} />;
};
