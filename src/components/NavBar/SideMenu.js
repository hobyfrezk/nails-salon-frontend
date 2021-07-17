import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme) => ({
  sideMenu: {
    minWidth: "70vw",
    maxWidth: "80vw",
    backgroundColor: theme.palette.background.paper,
    fontFamily: "Lobster Two, cursive",
    fontSize: "22px",
    paddingTop: "10vh",
  },
  listItem: {
    margin: "10px",
  },
}));

const MyListItem = (props) => {
  const classes = useStyles();

  return (
    <ListItem button component="a" className={classes.listItem}>
      <ListItemText disableTypography {...props} />
    </ListItem>
  );
};

const SideMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.sideMenu}>
      <List>
        <Divider />
        <MyListItem href="" primary="Home" />
        <Divider />
        <MyListItem href="" primary="Galary" />
        <Divider />
        <MyListItem href="" primary="Store" />
        <Divider />
        <MyListItem href="" primary="My Account" />
        <Divider />
      </List>
    </div>
  );
};

export default SideMenu;
