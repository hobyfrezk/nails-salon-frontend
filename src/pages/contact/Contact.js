import { Button, Grid } from "@material-ui/core";
import Instagram from "@material-ui/icons/Instagram";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { CarouselFont, TextFont } from "../../components/Theme";

const useStyles = makeStyles((theme) => ({
	container: {
		textAlign: "Center",
		marginBottom: "20px",
	},
	title: {
		fontFamily: CarouselFont,
		fontSize: "2rem",
		marginBottom: "20px",
	},
	text: {
		marginBottom: "5px",
		textAlign: "left",
		fontFamily: CarouselFont,
	},
	shortBox: {
		display: "block",
		border: "0",
		borderBottom: "2px solid gray",
		marginBottom: "20px",
		width: "100%",
		height: "30px",
		outline: "0",
		fontFamily: TextFont,
		fontSize: "1rem",
		"&:focus": {
			borderBottom: "3px solid black",
		},
	},
	longBox: {
		fontSize: "1rem",
		border: "2px solid gray",
		display: "block",
		width: "100%",
		marginBottom: "20px",
		fontFamily: TextFont,
		outline: "0",
		resize: "none",

		"&:focus": {
			border: "3px solid black",
		},
	},
	sendButton: {
		display: "block",
		border: "1px solid black",
		width: "100%",
		backgroundColor: "rgba(36, 30, 16)",
		borderRadius: "0",
		color: "rgba(230, 212, 163)",
		"&:hover": {
			backgroundColor: "rgba(36, 30, 16)",
			color: "rgba(230, 212, 163)",
		},
		marginBottom: "20px",
	},
}));

const Contact = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Grid container align="center" justify="center" alignItems="center">
				<Grid item xs={12}>
					<p className={classes.title}>CONTACT</p>
				</Grid>

				<Grid item xs={8}>
					<p className={classes.text}>CONTACT US</p>

					<input
						type="text"
						placeholder={"Your Name"}
						className={classes.shortBox}
					/>

					<input
						type="text"
						placeholder={"Email"}
						className={classes.shortBox}
					/>

					<textarea
						type="text"
						rows="6"
						placeholder={"Message"}
						className={classes.longBox}
					/>

					<Button className={classes.sendButton}>Send</Button>

					<p>Follow us on </p>
					<Instagram style={{ fontSize: 50 }} />
				</Grid>
			</Grid>
		</div>
	);
};

export default Contact;
