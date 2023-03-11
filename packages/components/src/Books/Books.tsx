import * as React from "react";
import { createRef, useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import {
  IndexedDBCacheStrategy,
  SavedBook,
} from "@promise-front/business-layer";
import Book from "./components/Book/Book";
import { BookImpl } from "@promise-front/business-layer/src/Book";
import { styled } from "@mui/material/styles";

const BookInput = styled("input")`
  display: none;
`;

const Books: React.FC = (props) => {
  const [books, setBooks] = useState<SavedBook[]>([]);
  const cache = new IndexedDBCacheStrategy();

  const inputRef = createRef<HTMLInputElement>();

  const changeFile = async () => {
    if (!inputRef.current) {
      return;
    }
    const file = inputRef.current.files[0];

    const reader = new FileReader();

    reader.readAsArrayBuffer(file);

    reader.addEventListener("load", async (e) => {
      const book = new BookImpl(e.target.result as ArrayBuffer);

      await book.waitUntilReady();
      await cache.save(book);

      setBooks(await IndexedDBCacheStrategy.getAllSavedBooks());
    });
  };

  useEffect(() => {
    (async () => {
      setBooks(await IndexedDBCacheStrategy.getAllSavedBooks());
    })();
  }, []);

  const onDeleteBook = useCallback(
    async (id: string) => {
      await cache.delete(id);
      setBooks(await IndexedDBCacheStrategy.getAllSavedBooks());
    },
    [books, cache]
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        <label htmlFor={"book_input"}>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => inputRef.current.click()}
          >
            <AddIcon />
          </Fab>
          <Typography sx={{ ml: 2, fontSize: "21px" }}>
            Add book in .epub format
          </Typography>

          <BookInput
            id={"book_input"}
            ref={inputRef}
            onChange={changeFile}
            type="file"
            accept={"application/epub+zip"}
          />
        </label>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "raw",
          width: "90%",
          flexWrap: "wrap",
        }}
      >
        {books.length
          ? books.map((book) => (
              <Book
                key={book.id}
                book={book}
                onStartRead={() => {}}
                onDelete={() => onDeleteBook(book.id)}
              />
            ))
          : null}
      </Box>
    </>
  );
};

export default Books;
