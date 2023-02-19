import * as React from 'react';
import { AppLayout } from '../index';
import { useCallback, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { text } from './text';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const About: React.FC = (props) => {
  const style = {
    width: '100%',
    height: '100%',
    bgcolor: 'background.paper',
  };
  const itemStyle = {
    textAlign: 'center',
  };
  const menuItems = ['ABOUT', 'BOOKS', 'READ', 'BET'];
  const renderSidebar = useCallback(() => {
    const sideBarItems = ['ABOUT', 'BOOKS', 'READ', 'BET'];
    return (
      <List>
        {sideBarItems.map((item, index) => (
          <ListItem button key={index} sx={{ bgcolor: index == 0 ? '#1976d2' : 'white' }}>
            <ListItemText
              primary={item}
              sx={{ textAlign: 'center', color: index == 0 ? 'white' : 'black' }}
            />
          </ListItem>
        ))}
      </List>
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
      <>
        <Box sx={{ maxWidth: { xs: 320, sm: '90%' }, bgcolor: 'background.paper' }}>
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
        <Box sx={{ maxWidth: { xs: 320, sm: '90%' }, bgcolor: 'background.paper', mt: 3 }}>
          {textLang.map((item: string) => (
            <Typography sx={{ mt: 2 }} key={item}>
              {item}
            </Typography>
          ))}
        </Box>
      </>
    );
  }, []);

  return <AppLayout title={'About'} renderSidebar={renderSidebar} renderContent={renderContent} />;
};

export default About;
