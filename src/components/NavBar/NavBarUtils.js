import { makeStyles, styled } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const MyAppBar = styled(AppBar)({
	// background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  background: "white",
	height: 55,
  boxShadow: "0px 0px 0px 0px",
	// boxShadow: "3px 3px 5px 2px rgba(255, 105, 135, .3)",
});

export const MyToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

export const MyTitleStyle = makeStyles({
	title: {
		color: "black",
		fontSize: "28px",
		fontFamily: "Lobster, cursive",
	},
	desktopBanner: {
		display: "flex",
		color: "black",
		fontSize: "22px",
		fontFamily: "Lobster, cursive",
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
