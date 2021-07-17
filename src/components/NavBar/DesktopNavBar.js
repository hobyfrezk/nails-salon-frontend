import React from "react";
import { MyAppBar, MyToolbar, MyTitle, MyAccount, MyListItem } from "./NavBarUtils";
import { makeStyles } from "@material-ui/core/styles";

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
