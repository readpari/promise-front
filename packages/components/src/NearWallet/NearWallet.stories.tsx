import { Box } from "@mui/material";
import * as React from "react";

import Wallet from "./NearWallet";

export default {
  title: "Wallet",
  component: Wallet,
};

export const Primary = () => {
  return (
    <Box>
      <div id="wallet"></div>
    </Box>
  );
};
