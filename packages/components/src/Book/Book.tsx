import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Book as BookImpl } from "@promise-front/business-layer";
import { NavItem } from "epubjs/types/navigation";
import AppLayout from "../AppLayout/AppLayout";
import { Box, IconButton } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

interface Props {
  book: Uint8Array | string;
}

const Book: React.FC<Props> = (props) => {
  const [book, setBook] = useState<BookImpl>(null);
  const [annotations, setAnnotations] = useState<NavItem[]>(null);
  const [title, setTitle] = useState<string>("");

  // init state
  useEffect(() => {
    (async () => {
      const book = new BookImpl(props.book as ArrayBuffer);
      setBook(book);

      book.render("book");
      setAnnotations(await book.getAnnotations());
      setTitle(await book.getMetaField("title"));
    })();
  }, [props.book]);

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (!book) {
        return;
      }

      // Left Key
      if (e.key === "ArrowLeft") {
        book.prevPage();
      }

      // Right Key
      if (e.key === "ArrowRight") {
        book.nextPage();
      }
    },
    [book]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, [book]);

  const onOpenPage = useCallback(
    (navItem: NavItem) => {
      book.setPage(navItem);
    },
    [book]
  );

  const renderSidebar = useCallback(() => {
    if (!annotations) {
      return null;
    }

    return (
      <List>
        {annotations.map((navItem) => (
          <ListItem key={navItem.id} disablePadding>
            <ListItemButton>
              <ListItemText
                onClick={() => onOpenPage(navItem)}
                sx={{ fontSize: 5 }}
                primary={navItem.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  }, [annotations]);

  const renderBookActions = useCallback(() => {
    return (
      <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: "flex" }}>
        <IconButton sx={{ color: "#fff" }} onClick={() => book.prevPage()}>
          <NavigateBefore />
        </IconButton>

        <IconButton sx={{ color: "#fff" }} onClick={() => book.nextPage()}>
          <NavigateNext />
        </IconButton>
      </Box>
    );
  }, [book]);

  return <div id="book"></div>;
};

export default Book;
