import { makeStyles, styled } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import React from "react";

export const RootFont = "Archivo Narrow, cursive"

export const MyAppBar = styled(AppBar)({
	// background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
	background: "white",
	height: 55,
	boxShadow: "0px 0px 0px 0px",
	// boxShadow: "3px 3px 5px 2px rgba(255, 105, 135, .3)",
});

export const MyToolbar = styled(Toolbar)({
	justifyContent: "space-between",
});

export const MyTitleStyle = makeStyles({
	title: {
		color: "black",
		fontSize: "28px",
		fontFamily: RootFont,
	},
	desktopBanner: {
		display: "flex",
		color: "black",
		fontSize: "22px",
		fontFamily: RootFont,
	},
});

export const MyTitle = () => {
	const classes = MyTitleStyle();
	return <p className={classes.title}> {"MineNails"} </p>;
};

export const MyAccount = () => {
	return (
		<div>
			<Button>
				<AccountCircleIcon />
			</Button>
		</div>
	);
};

export const MyListItem = (props) => {
	const classes = props.style();
	const { primary, to } = props;

	const CustomLink = React.useMemo(
		() =>
			React.forwardRef((linkProps, ref) => (
				<Link ref={ref} to={to} {...linkProps} />
			)),
		[to]
	);

	return (
		<ListItem button component={CustomLink} className={classes.listItem}>
			<ListItemText primary={primary} disableTypography />
		</ListItem>
	);
};
