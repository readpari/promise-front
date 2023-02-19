import * as React from 'react';
import { AppLayout } from '../index';
import { useCallback, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const About: React.FC = (props) => {
  const menuItems = ['ABOUT', 'BOOKS', 'READ', 'BET'];
  const renderSidebar = useCallback(() => {
    const sideBarItems = ['ABOUT', 'BOOKS', 'READ', 'LOGIN', 'BET'];
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
    const text = [
      'Во время чтения, Вас не должна беспокоить мысль о сохранности Ваших денег.',
      'Они будут хранится в месте, где их не сможет достать буквально никто.',
      'В блокчейн технологиях существует такое понятие, как смарт-контракт.',
      'Смар-контракт это простой кошелек, по типу биткоин кошелька.',
      'Но отличие, состоит в том, что им никто не владеет, он просто существует сам по себе.',
      'В нем заложен програмный код, который и распоряжается его деньгами.',
      'Когда это код поймет, что все условия выполнены, он переведет деньги.',
      'Когда вы откроете книгу, Смарт-контракт Promise начнет получать уведомления каждую минуту.',
      'Когда он поймет, что вы набрали нужное время, то мгновенно перешлет деньги на ваш кошелек.',
      'Смарт контракт Promise создан на блокчейне Near,  с его кодом вы можете ознакомиться по этой ссылке',
      'Чтобы сделать ставку и начать читать, вы должны войти в кошелек Near',
    ];

    return (
      <Box sx={{ width: '50%' }}>
        {text.map((item) => (
          <Typography sx={{ m: 1 }}>{item}</Typography>
        ))}

        <Button sx={{ mt: 3 }} variant="contained" size="large">
          Войти
        </Button>
      </Box>
    );
  }, []);

  return <AppLayout title={'Login'} renderSidebar={renderSidebar} renderContent={renderContent} />;
};

export default About;
