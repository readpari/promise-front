import * as React from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import BookIcon from "@mui/icons-material/Book";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import InfoIcon from "@mui/icons-material/Info";
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
    icon: <InfoIcon />,
  },
  {
    path: "/login",
    title: "Login",
    icon: <LoginIcon />,
  },
  { path: "/bet", title: "Bet", icon: <CurrencyBitcoinIcon /> },
  {
    path: "/books",
    title: "Books",
    icon: <BookIcon />,
  },
  {
    path: "/read",
    title: "Read",
    icon: <LocalLibraryIcon />,
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
    <Box>
      <Paper elevation={0}>
        <List aria-label="main mailbox folders">
          {routes.map((route) => (
            <ListItemLink
              key={route.path}
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
