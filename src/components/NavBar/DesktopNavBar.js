import React from "react";
import { MyAppBar, MyToolbar, MyTitle, MyAccount } from "./NavBarUtils";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
	barBanner: {
		fontFamily: "Lobster Two, cursive",
		fontSize: "22px",
		display: "flex",
    color: "black",
    paddingLeft: "50px",
	},
	listItem: {
		margin: "10px",
	},
  group1: {
    display: "flex",
  }
}));

const MyListItem = (props) => {
	const classes = useStyles();

	return (
		<ListItem button component="a" className={classes.listItem}>
			<ListItemText disableTypography {...props} />
		</ListItem>
	);
};
const BarBanner = () => {
	const classes = useStyles();

	return (
		<div className={classes.barBanner}>
			<MyListItem href="" primary="Home" />
			<MyListItem href="" primary="Galary" />
			<MyListItem href="" primary="Store" />
		</div>
	);
};

const DesktopNavBar = () => {
  const classes = useStyles();

	return (
		<div>
			<MyAppBar position="fixed">
				<MyToolbar>
					<div className={classes.group1}>
						<MyTitle />
						<BarBanner />
					</div>
					<MyAccount />
				</MyToolbar>
			</MyAppBar>
		</div>
	);
};

export default DesktopNavBar;
