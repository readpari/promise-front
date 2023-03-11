import * as React from "react";
import { styled } from "@mui/material/styles";
import { NavLink as NavLinkBase } from "react-router-dom";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const NavLink = styled(NavLinkBase)`
  text-decoration: none;
`;

interface Route {
  path: string;
  title: string;
}

const routes: Route[] = [
  {
    path: "/",
    title: "About",
  },
  {
    path: "login",
    title: "Login",
  },
  { path: "bet", title: "Bet" },
  {
    path: "books",
    title: "Books",
  },
  {
    path: "read",
    title: "Read",
  },
];

const Navigation: React.FC = () => {
  return (
    <Box>
      <List>
        {routes.map((route, index) => (
          <NavLink
            key={route.path}
            to={route.path}
            children={
              <ListItem
                key={route.path}
                sx={{ bgcolor: index == 0 ? "#1976d2" : "white" }}
              >
                <ListItemText
                  sx={{ textAlign: "center" }}
                  primary={route.title}
                />
              </ListItem>
            }
          />
        ))}
      </List>
    </Box>
  );
};

export default Navigation;
