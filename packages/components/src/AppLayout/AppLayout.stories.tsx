import * as React from "react";
import AppLayout from "./AppLayout";
import { createRef, useCallback, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "App layout",
  component: AppLayout,
};

export const Primary = () => {
  return (
    <AppLayout
      title={"title"}
      renderSidebar={() => null}
      renderContent={() => null}
    />
  );
};

export const WithRenderProps = () => {
  return (
    <AppLayout
      title={"title"}
      renderSidebar={() => <div>sidebar content</div>}
      renderContent={() => <div>content</div>}
      renderAdditionalElementsAppBar={() => (
        <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: "flex" }}>
          <IconButton sx={{ color: "#fff" }}>
            <NavigateBefore />
          </IconButton>

          <IconButton sx={{ color: "#fff" }}>
            <NavigateNext />
          </IconButton>
        </Box>
      )}
    />
  );
};
