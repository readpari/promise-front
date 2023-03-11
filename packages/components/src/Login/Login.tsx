import * as React from "react";
import { AppLayout } from "../index";
import { useCallback, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import Navigation from "../Navigation/Navigation";

const About: React.FC = (props) => {
  const renderSidebar = useCallback(() => {
    return <Navigation />;
  }, []);

  const renderContent = useCallback(() => {
    const text = [
      "Во время чтения, Вас не должна беспокоить мысль о сохранности Ваших денег.Они будут хранится в месте, где их не сможет достать буквально никто.",
      // 'Они будут хранится в месте, где их не сможет достать буквально никто.',
      "В блокчейн технологиях существует такое понятие, как смарт-контракт. Смарт-контракт это простой кошелек, по типу биткоин кошелька. Но отличие, состоит в том, что им никто не владеет, он просто существует сам по себе.",
      // 'Смарт-контракт это простой кошелек, по типу биткоин кошелька.',
      // 'Но отличие, состоит в том, что им никто не владеет, он просто существует сам по себе.',
      "В нем заложен програмный код, который и распоряжается посткпающими на него деньгами. Когда это код поймет, что все условия выполнены, он переведет деньги.",
      // 'Когда это код поймет, что все условия выполнены, он переведет деньги.',
      "Когда вы откроете книгу, Смарт-контракт Promise начнет получать уведомления, о том что вы читаете. Когда он поймет, что вы набрали нужное время, то мгновенно перешлет деньги на ваш кошелек.",
      "Смарт контракт Promise создан на блокчейне Near,  с его кодом вы можете ознакомиться по этой ссылке.",
      "Чтобы сделать ставку и начать читать, вы должны войти в кошелек Near",
    ];

    return (
      <Paper
        elevation={3}
        sx={{
          p: 5,
          m: 3,
          background: "#1976d217",
          width: "80vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {text.map((item) => (
          <Typography key={item} sx={{ m: 1 }}>
            {item}
          </Typography>
        ))}

        <Button sx={{ mt: 3 }} variant="contained" size="large">
          Войти
        </Button>
      </Paper>
    );
  }, []);

  return (
    <AppLayout
      title={"Login"}
      renderSidebar={renderSidebar}
      renderContent={renderContent}
    />
  );
};

export default About;
