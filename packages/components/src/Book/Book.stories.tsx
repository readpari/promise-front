import * as React from "react";
import Book from "./Book";
import { createRef, useCallback, useState } from "react";
import { BookImpl } from "@promise-front/business-layer/src/Book";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Book",
  component: Book,
};

export const Primary = () => {
  const [book, setBook] = useState<ArrayBuffer>(null);
  const inputRef = createRef<HTMLInputElement>();

  const changeFile = useCallback(async () => {
    if (!inputRef.current) {
      return;
    }
    const file = inputRef.current.files[0];

    const reader = new FileReader();

    reader.readAsArrayBuffer(file);

    reader.addEventListener("load", (e) => {
      setBook(e.target.result as ArrayBuffer);
    });
  }, [inputRef]);

  return (
    <>
      {!book && (
        <input
          ref={inputRef}
          onChange={changeFile}
          type="file"
          accept={"application/epub+zip"}
        />
      )}

      {book && <Book book={book as Uint8Array} />}
    </>
  );
};
