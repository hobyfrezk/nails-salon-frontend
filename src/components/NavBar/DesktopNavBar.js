import {
	MyAccount,
	MyAppBar,
	MyListItem,
	MyTitle,
	MyToolbar,
} from "./NavBarUtils";

import {NavFont} from "../Theme"
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	MyToolbar: {
		display: "grid",
		gridTemplateColumns: "200px 1fr auto",
	},

	barBanner: {
		display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 10fr",
		fontSize: "20px",
		color: "black",
		fontFamily: NavFont,
	},

	listItem: {
		margin: "10px",
		textAlign: "center",
	},
}));

const BarBanner = () => {
	const classes = useStyles();

	return (
		<div className={classes.barBanner}>
			<MyListItem to="/" primary="Home" style={useStyles} />
			<MyListItem to="/services" primary="Service" style={useStyles} />
			<MyListItem to="/galary" primary="Galary" style={useStyles} />
			<MyListItem to="/contact" primary="Contact" style={useStyles} />
		</div>
	);
};

const DesktopNavBar = () => {
	const classes = useStyles();

	return (
		<div>
			<MyAppBar position="static">
				<MyToolbar className={classes.MyToolbar}>
					<MyTitle />
					<BarBanner />
					<MyAccount />
				</MyToolbar>
			</MyAppBar>
		</div>
	);
};

export default DesktopNavBar;
