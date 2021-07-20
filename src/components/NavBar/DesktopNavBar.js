import React from "react";
import {
	MyAppBar,
	MyToolbar,
	MyTitle,
	MyAccount,
	MyListItem,
} from "./NavBarUtils";
import { makeStyles } from "@material-ui/core/styles";
import {NavFont} from "../Theme"

const useStyles = makeStyles((theme) => ({
	MyToolbar: {
		display: "grid",
		gridTemplateColumns: "200px 1fr 50px",
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
