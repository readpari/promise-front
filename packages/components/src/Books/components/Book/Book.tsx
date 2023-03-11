import * as React from "react";
import { SavedBook } from "@promise-front/business-layer";
import {
  CardContent,
  Typography,
  Button,
  Card,
  CardMedia,
  CardActions,
} from "@mui/material";

interface Props {
  book: SavedBook;
}
const Book: React.FC<Props> = ({ book }) => {
  return (
    <Card sx={{ maxWidth: 350, margin: 3 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image="https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {book.author}
        </Typography>
        <Typography variant="h6" component="div">
          {book.title}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Read</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Book;
