import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { MyListItem } from "components/NavBar/NavBarUtils";
import {NavFont} from "components/Theme"
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

const SideMenu = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.sideMenu}>
			<List>
				<Divider />
				<MyListItem to="/" primary="Home" style={useStyles} onClick={props.toggleDrawer}/>
				<Divider />
				<MyListItem to="/services" primary="Service" style={useStyles} onClick={props.toggleDrawer}/>
				<Divider />
				<MyListItem to="/galary" primary="Galary" style={useStyles} onClick={props.toggleDrawer}/>
				<Divider />
				<MyListItem to="/contact" primary="Contact" style={useStyles} onClick={props.toggleDrawer}/>
				<Divider />
				<MyListItem to="/dashboard" primary="My Account" style={useStyles} onClick={props.toggleDrawer} />
				<Divider />
			</List>
		</div>
	);
};

export default SideMenu;
