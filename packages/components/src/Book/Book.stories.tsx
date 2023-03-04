import * as React from 'react';
import Book from './Book';
import { createRef, useCallback, useState, useEffect } from 'react';
import { IndexedDBCacheStrategy } from '@promise-front/business-layer';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

// import ornament from './ornament.png'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Book',
  component: Book,
};

const BookCard = ({
  name,
  id,
  author,
  setBook,
  book,
}: {
  book: any;
  setBook: Function;
  name: string;
  id: string;
  author: string;
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        // p: 5,
        m: 3,
        background: 'white',
        width: '225px',
        height: '325px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Fab size="small" sx={{ position: 'absolute', top: '5px', right: '2px' }}>
        <CloseIcon />
      </Fab>
      <IconButton onClick={() => setBook(book)} sx={{ borderRadius: 0 }}>
        <Paper
          elevation={3}
          sx={{
            // p: 5,
            m: 3,
            background: 'white',
            width: '200px',
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography sx={{ textAlign: 'center', mb: 1, color: '#bebebe' }}>{author}</Typography>

          <Typography sx={{ textAlign: 'center' }}>{name}</Typography>
        </Paper>
      </IconButton>
    </Box>
  );
};

export const Primary = () => {
  const [book, setBook] = useState<ArrayBuffer>(null);
  const [savedBooks, setSavedBooks] = useState([]);

  const fff = async () => {
    const f = await IndexedDBCacheStrategy.getAllSavedBooks();
    setSavedBooks(f);
    console.log(11111, f);
  };

  useEffect(() => {
    fff();
  }, []);

  const inputRef = createRef<HTMLInputElement>();

  const changeFile = useCallback(async () => {
    if (!inputRef.current) {
      return;
    }
    const file = inputRef.current.files[0];

    const reader = new FileReader();

    reader.readAsArrayBuffer(file);

    reader.addEventListener('load', (e) => {
      setBook(e.target.result as ArrayBuffer);
    });
  }, [inputRef]);

  return (
    <>
      {!book && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'raw',
            mb: 5,
            mt: 3,
          }}
        >
          <Fab
            color="primary"
            sx={{ background: 'cornflowerblue' }}
            aria-label="add"
            component="label"
          >
            <AddIcon />

            <input
              hidden
              ref={inputRef}
              onChange={changeFile}
              type="file"
              accept={'application/epub+zip'}
            />
          </Fab>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Add a book in .epub format
          </Typography>
        </Box>
      )}
      {!book && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'raw',
            flexWrap: 'wrap',
          }}
        >
          {savedBooks.map((item, index) => (
            <BookCard
              setBook={setBook}
              book={item.blob}
              key={index}
              id={item.id}
              name={item.title}
              author={item.author}
            />
          ))}
        </Box>
      )}
      {book && <Book book={book as Uint8Array} />}
    </>
  );
};
