import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { JoinUsFont, EmailFont } from "../Theme";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "rgba(230, 212, 163, 0.3)",
		width: "100vw",
	},
	text: {
		fontFamily: JoinUsFont,
		fontSize: "2.5em",
	},
	emailButtonContainer: {
		display: "flex",
		alignItems: "center",
		margin: "auto",
	},
	input: {
		alignItems: "center",
		display: "row",
		justifyContent: "space-between",
		border: "0",
		borderBottom: "2px solid gray",
		backgroundColor: "transparent",
		outline: "0",
		fontSize: "1rem",
		fontFamily: EmailFont,
		textAlign: "center",
		width: "296px",
		"&:focus": {
			borderBottom: "3px solid black",
			
		}
	},
	button: {
		border: "1px solid black",
		backgroundColor: "rgba(36, 30, 16)",
		color: "rgba(230, 212, 163)",
		borderRadius: "0",
		height: "50px",
		width: "300px",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {
			marginTop: "10px",
			marginBottom: "40px",
		},
		"&:hover": {
			backgroundColor: "rgba(36, 30, 16)",
			color: "rgba(230, 212, 163)",
		},
	},
}));

const JoinUs = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Grid
				container
				spacing={0}
				align="center"
				justify="center"
				alignItems="center"
			>
				<Grid item xs={12} lg={7}>
					<p className={classes.text}>Try MineNails - Join the Club</p>
				</Grid>
				<Grid
					item
					align="center"
					justify="center"
					alignItems="center"
					xs={12}
					lg={2}
				>
					<input
						type="text"
						className={classes.input}
						placeholder="Email address"
					/>
				</Grid>
				<Grid item xs={12} lg={3}>
					<Button className={classes.button}>Keep Me Posted</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default JoinUs;
