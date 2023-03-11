import * as React from "react";
import { AppLayout } from "../index";
import { useCallback } from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CloseIcon from "@mui/icons-material/Close";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Navigation from "../Navigation/Navigation";

const Books: React.FC = (props) => {
  const renderSidebar = useCallback(() => {
    return <Navigation />;
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
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Typography sx={{ ml: 2, fontSize: "21px" }}>
            Add book in .epub format
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "raw",
            width: "90%",
            flexWrap: "wrap",
          }}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <BookCard />
          ))}
        </Box>
      </>
    );
  }, []);

  return (
    <AppLayout
      title={"Books"}
      renderSidebar={renderSidebar}
      renderContent={renderContent}
    />
  );
};

export default Books;
