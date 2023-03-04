import * as React from 'react';
import { AppLayout } from '../index';
import { useCallback, useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { text } from './text';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Opacity } from '@mui/icons-material';
import { indigo } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const About: React.FC = (props) => {
  const renderSidebar = useCallback(() => {
    const sideBarItems = ['ABOUT', 'READ', 'BET'];
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100vh',
        }}
      >
        <List>
          {sideBarItems.map((item, index) => (
            <ListItem button key={index} sx={{ bgcolor: index == 0 ? 'cornflowerblue' : 'white' }}>
              <ListItemText
                primary={item}
                sx={{ textAlign: 'center', color: index == 0 ? 'white' : 'black' }}
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ textAlign: 'center', color: 'grey', mb: 3 }}>mail@bookchain.page</Box>
      </Box>
    );
  }, []);

  const renderContent = useCallback(() => {
    const [value, setValue] = React.useState(1);
    const [textLang, setTextLang] = React.useState(text['RU']);
    useEffect(() => {
      console.log(textLang);
    }, []);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
      setTextLang(text[Object.keys(text)[newValue]]);
    };

    return (
      <Box sx={{}}>
        <Box sx={{ width: '80vw', bgcolor: 'background.paper' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            {Object.keys(text).map((lang) => (
              <Tab key={lang} label={lang} />
            ))}
          </Tabs>
        </Box>

        <Paper
          elevation={3}
          sx={{
            p: 5,
            m: 3,
            background: 'white',
            width: '80vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Typography variant="h6" sx={{ textAlign: 'left' }}>
            {textLang}
          </Typography>
        </Paper>
      </Box>
    );
  }, []);

  return (
    <AppLayout title={'BOOKCHAIN'} renderSidebar={renderSidebar} renderContent={renderContent} />
  );
};

export default About;
