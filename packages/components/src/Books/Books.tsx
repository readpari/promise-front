import * as React from "react";
import { AppLayout } from "../index";
import { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CloseIcon from "@mui/icons-material/Close";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Navigation from "../Navigation/Navigation";

import {
  IndexedDBCacheStrategy,
  SavedBook,
} from "@promise-front/business-layer";
import Book from "./components/Book/Book";

const Books: React.FC = (props) => {
  const [books, setBooks] = useState<SavedBook[]>([]);

  const renderSidebar = useCallback(() => {
    return <Navigation />;
  }, []);

  useEffect(() => {
    (async () => {
      setBooks(await IndexedDBCacheStrategy.getAllSavedBooks());
    })();
  }, []);

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
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Typography sx={{ ml: 2, fontSize: "21px" }}>
          Add book in .epub format
        </Typography>
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
          ? books.map((book) => <Book key={book.id} book={book} />)
          : null}
      </Box>
    </>
  );
};

export default Books;
