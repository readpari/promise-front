import * as React from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import Paper from "@mui/material/Paper";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  Route,
} from "react-router-dom";

interface Route {
  path: string;
  title: string;
  icon?: React.ReactElement;
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

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
  itemProps,
  ref
) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

function ListItemLink(props: Route) {
  const { icon, title, path } = props;

  return (
    <li>
      <ListItem button component={Link} to={path}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={title} />
      </ListItem>
    </li>
  );
}

const Navigation: React.FC = () => {
  return (
    <Box sx={{ width: 360 }}>
      <Paper elevation={0}>
        <List aria-label="main mailbox folders">
          {routes.map((route) => (
            <ListItemLink
              path={route.path}
              title={route.title}
              icon={route.icon}
            />
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Navigation;
