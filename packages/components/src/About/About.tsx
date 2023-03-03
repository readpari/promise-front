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
    const [value, setValue] = React.useState(1);
    const [textLang, setTextLang] = React.useState(text['RU']);
    useEffect(() => {
      console.log(textLang);
    }, []);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
      setTextLang(text[Object.keys(text)[newValue]]);
    };

    const textRepl = [
      'Promise reader заставит вас читать',
      'От вас требуется всего 2 действия',
      'Выбрать книгу и сделать ставку',
      'Через сколько дней книга будет прочитана?',
      'Если успеете в срок, вернете свою ставку',
      'Если не успеете, то деньги сгорят',
      'Удачного чтения',
    ];

    return (
      <>
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
            width: '50vw',
            // height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Bookchain это приложение для чтения, на основе смарт-контракта. Смарт-контракт - это
            компьютерная программа, записанная в блокчейн-среде, которая позволяет заключать сделки
            и контролировать их исполнение без участия посредников. Он гарантирует безопасность
            сделок, поскольку все условия контракта прописываются в коде и автоматически выполняются
            при соблюдении установленных условий. В смарт-контракте нет возможности изменить условия
            после его подписания, что исключает возможность мошенничества.
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Смарт-контракт Bookchain предлагает Вам заключить сделку. Если вы хотите много читать,
            но не можете себя заставить, то он Вас заставит. От вас нужно всего 3 простых действия:
          </Typography>
          <Typography variant="h6" sx={{}}>
            1. Выберите количество часов, которые вы хотите посвятить чтению.
          </Typography>

          <Typography variant="h6" sx={{}}>
            2. Выберите количество дней, в течении которых вы хотите успеть это сделать.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>
            3. Поставьте на кон сумму, расстаться с которой Вам будет невозможно.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>
            Когда вы откроете книгу и начнете листать страницы таймер начнет обратный отсчет. Если
            вы заснете и перестанете листать страницы или закроете книгу, то таймер остановится. Как
            только вы справитесь с поставленной задачей деньги вернутся к Вам в полном объеме. Если
            вы не успеете, то потеряете свои деньги.
          </Typography>
        </Paper>
      </>
    );
  }, []);

  return (
    <AppLayout
      title={'PROMISE READER'}
      renderSidebar={renderSidebar}
      renderContent={renderContent}
    />
  );
};

export default About;
