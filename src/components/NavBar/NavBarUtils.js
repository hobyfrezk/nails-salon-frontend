import { makeStyles, styled } from "@material-ui/core/styles";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
import AuthModal from "components/Accounts/AuthModal";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavFont } from "components/Theme";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";

export const MyAppBar = styled(AppBar)({
	background: "rgba(230, 212, 163, 0.3)",
	boxShadow: "0 0 0 0",
});

export const MyToolbar = styled(Toolbar)({
	justifyContent: "space-between",
});

export const MyTitleStyle = makeStyles({
	title: {
		color: "black",
		fontSize: "30px",
		fontFamily: NavFont,
		margin: "0",
	},
	desktopBanner: {
		display: "flex",
		color: "black",
	},
});

export const MyTitle = () => {
	const classes = MyTitleStyle();
	return <p className={classes.title}> {"MineNails"} </p>;
};

export const MyAccount = () => {
	const [state, setState] = React.useState({ open: false, type: "login" });

	const handleOpen = () => {
		setState((prev) => ({ ...prev, open: true }));
		console.log(1);
	};

	const handleClose = () => {
		setState((prev) => ({ ...prev, open: false }));
	};

	const loginState = () => {
		setState((prev) => ({ ...prev, type: "login" }));
	};

	const signUpState = () => {
		setState((prev) => ({ ...prev, type: "signup" }));
	};

	const { open, type } = state;

	return (
		<div>
			<Button onClick={handleOpen}>
				<AccountCircleIcon />
			</Button>
			<AuthModal
				open={open}
				type={type}
				handleClose={handleClose}
				loginState={loginState}
				signUpState={signUpState}
			/>
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
