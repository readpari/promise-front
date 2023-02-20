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
    const theme = createTheme({
      palette: {
        primary: {
          main: indigo[50],
        },
        secondary: {
          main: indigo[50],
        },
      },
    });

    const textRepl = [
      'Promise заставит Вас читать',
      'От вас требуется всего 2 действия',
      'Выбрать книгу и сделать ставку',
      'Если успеете прочитать, то вернете свою ставку',
      'Если не успеете, то проиграете',
      'Сроки вы определяете сами',
      'Удачного чтения',
    ];
    const [replNum, setReplNum] = useState(0);
    const changeReplica = (bool: boolean) => {
      if (bool) {
        if (replNum < textRepl.length - 1) setReplNum(replNum + 1);
      } else {
        if (replNum > 0) setReplNum(replNum - 1);
      }
    };

    return (
      <ThemeProvider theme={theme}>
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
            background: '#1976d217',
            width: '80vw',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Fab
            color="primary"
            sx={{ position: 'absolute', top: '10px', left: '10px' }}
            aria-label="add"
            onClick={() => changeReplica(false)}
          >
            <KeyboardArrowLeftIcon />
          </Fab>
          <Fab
            color="primary"
            aria-label="add"
            sx={{ position: 'absolute', top: '10px', right: '10px' }}
            onClick={() => changeReplica(true)}
          >
            <KeyboardArrowRightIcon />
          </Fab>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            {textRepl[replNum]}
          </Typography>
        </Paper>
      </ThemeProvider>
    );
  }, []);

  return (
    <AppLayout title={'PROMISE'} renderSidebar={renderSidebar} renderContent={renderContent} />
  );
};

export default About;
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
    const theme = createTheme({
      palette: {
        primary: {
          main: indigo[50],
        },
        secondary: {
          main: indigo[50],
        },
      },
    });

    const textRepl = [
      'Promise заставит вас читать',
      'От вас требуется всего 2 действия',
      'Выбрать книгу и сделать ставку',
      'Через сколько дней вы прочитаете эту книгу?',
      'Если успеете, то вернете свою ставку',
      'Если не успеете, то деньги сгорят',
      'Удачного чтения',
    ];
    const [replNum, setReplNum] = useState(0);
    const changeReplica = (bool: boolean) => {
      if (bool) {
        if (replNum < textRepl.length - 1) setReplNum(replNum + 1);
      } else {
        if (replNum > 0) setReplNum(replNum - 1);
      }
    };

    return (
      <ThemeProvider theme={theme}>
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
            background: '#1976d217',
            width: '80vw',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Fab
            color="primary"
            sx={{ position: 'absolute', top: '10px', left: '10px' }}
            aria-label="add"
            onClick={() => changeReplica(false)}
          >
            <KeyboardArrowLeftIcon />
          </Fab>
          <Fab
            color="primary"
            aria-label="add"
            sx={{ position: 'absolute', top: '10px', right: '10px' }}
            onClick={() => changeReplica(true)}
          >
            <KeyboardArrowRightIcon />
          </Fab>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            {textRepl[replNum]}
          </Typography>
        </Paper>
      </ThemeProvider>
    );
  }, []);

  return (
    <AppLayout title={'PROMISE'} renderSidebar={renderSidebar} renderContent={renderContent} />
  );
};

export default About;

