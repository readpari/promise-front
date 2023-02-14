import * as React from "react";
import BookModal from "./BookModal";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Book modal",
  component: BookModal,
};

export const Primary = () => <BookModal />;
