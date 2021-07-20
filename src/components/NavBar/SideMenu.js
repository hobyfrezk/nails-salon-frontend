import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { MyListItem } from "./NavBarUtils";
import {NavFont} from "../Theme"

const useStyles = makeStyles((theme) => ({
	sideMenu: {
		minWidth: "70vw",
		maxWidth: "80vw",
		backgroundColor: theme.palette.background.paper,
		fontFamily: NavFont,
		fontSize: "22px",
		paddingTop: "10vh",
	},
	listItem: {
		margin: "10px",
	},
}));

const SideMenu = () => {
	const classes = useStyles();
	return (
		<div className={classes.sideMenu}>
			<List>
				<Divider />
				<MyListItem to="/" primary="Home" style={useStyles} />
				<Divider />
				<MyListItem to="/services" primary="Service" style={useStyles} />
				<Divider />
				<MyListItem to="/galary" primary="Galary" style={useStyles} />
				<Divider />
				<MyListItem to="/contact" primary="Contact" style={useStyles} />
				<Divider />
				<MyListItem to="/my-account" primary="My Account" style={useStyles} />
				<Divider />
			</List>
		</div>
	);
};

export default SideMenu;
