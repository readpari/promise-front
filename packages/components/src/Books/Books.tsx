import * as React from 'react';
import { AppLayout } from '../index';
import { useCallback } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import CardActions from '@mui/material/CardActions';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CloseIcon from '@mui/icons-material/Close';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Books: React.FC = (props) => {
  const renderSidebar = useCallback(() => {
    const sideBarItems = ['ABOUT', 'BOOKS', 'READ', 'BET'];
    return (
      <List>
        {sideBarItems.map((item, index) => (
          <ListItem button key={index} sx={{ bgcolor: index == 1 ? '#1976d2' : 'white' }}>
            <ListItemText
              primary={item}
              sx={{ textAlign: 'center', color: index == 1 ? 'white' : 'black' }}
            />
          </ListItem>
        ))}
      </List>
    );
  }, []);

  const BookCard = () => {
    const theme = useTheme();

    return (
      <Card sx={{ maxWidth: 150, margin: 3 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          // height="200"
          image="https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg"
        />

        <CardActions>
          <Button size="small">read</Button>
          <Button size="small">
            <CloseIcon />
          </Button>
        </CardActions>
      </Card>
    );
  };

  const renderContent = useCallback(() => {
    const theme = useTheme();

    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Typography sx={{ ml: 2, fontSize: '21px' }}>Add book in .epub format</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'raw', width: '90%', flexWrap: 'wrap' }}>
          {[1, 2, 3, 4, 5].map((item) => (
            <BookCard />
          ))}
        </Box>
      </>
    );
  }, []);

  return <AppLayout title={'Books'} renderSidebar={renderSidebar} renderContent={renderContent} />;
};

export default Books;

