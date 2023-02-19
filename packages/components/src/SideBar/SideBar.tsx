import * as React from 'react';
import { AppLayout } from '../index';
import { useCallback } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const About: React.FC = (props) => {
  const renderSidebar = useCallback(() => {
    const sideBarItems = ['about', 'books', 'read', 'bet'];
    return (
      <div>
        {sideBarItems.map((item, index) => (
          <Box key={index} component="span" sx={{}}>
            <Button
              variant={index == 1 ? 'outlined' : 'text'}
              sx={{ width: '100%', margin: '10px 0' }}
            >
              {item}
            </Button>
          </Box>
        ))}
      </div>
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
