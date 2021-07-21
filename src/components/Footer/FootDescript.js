import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { TextFont } from "../Theme";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "rgba(36, 30, 16)",
		color: "white",
		fontFamily: TextFont,
		padding: "30px",
	},
	text: {
		fontSize: "1rem",
	},
	icons: {},
}));

export const FootDescript = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Grid container spacing={3}>
				<Grid item xs={12} lg={4}>
					<p className={classes.text}>
						Create your beautiful quality - Boost your true beauty! Professional
						hand and foot care salon, medical-grade disinfection specifications
						and boutique-level care brands, exclusive combination of Russian
						ultimate trim and Japanese-style meticulous maintenance of trim. You
						are born to be beautiful.
					</p>
					<div className={classes.icons}>
						<FacebookIcon style={{ fontSize: 30 }} />
						<InstagramIcon style={{ fontSize: 30 }} />
						<YouTubeIcon style={{ fontSize: 30 }} />
					</div>
				</Grid>
				<Grid item lg={12} xs={12} align="right">
					<p>Powered by Chongshun ·  HOOOOBY STUDIO™</p>
				</Grid>
			</Grid>
		</div>
	);
};
