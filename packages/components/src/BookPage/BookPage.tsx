import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  IndexedDBCacheStrategy,
  SavedBook,
} from "@promise-front/business-layer";
import { Typography } from "@mui/material";
import Book from "../Book";

const BookPage: React.FC = () => {
  const [books, setBooks] = useState<SavedBook[]>([]);
  const [selectedBook, setSelectedBook] = useState<ArrayBuffer>(null);
  const params = useParams<{ id?: string }>();

  useEffect(() => {
    (async () => {
      setBooks(await IndexedDBCacheStrategy.getAllSavedBooks());
    })();
  }, []);

  useEffect(() => {
    if (!books.length && !selectedBook) {
      return;
    }

    setSelectedBook(books.find((book) => book.id === params.id).blob);
  }, [books, selectedBook, params]);

  if (!selectedBook) {
    return <Typography variant={"h3"}>book not found</Typography>;
  }

  return <Book book={selectedBook as Uint8Array} />;
};

export default BookPage;
