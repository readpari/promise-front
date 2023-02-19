import * as React from 'react';
import { AppLayout } from '../index';
import { useCallback } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const About: React.FC = (props) => {
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

  const renderContent = useCallback(() => {
    return (
      <div>Это контент страницы см такую-же функцию в packages/components/src/Book/Book.tsx</div>
    );
  }, []);

  return <AppLayout title={'About'} renderSidebar={renderSidebar} renderContent={renderContent} />;
};

export default About;
