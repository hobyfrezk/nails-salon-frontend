import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = ({ ordering, expanded }) =>
	makeStyles((theme) => ({
		container: {
			width: "80vw",
			padding: "1vw",
			height: "fit-content",
			alignItems: "center",
			fontSize: "23px",
			fontWeight: "500",

			backgroundColor: "rgba(216, 227, 221)",
			// borderBottom: ordering === "last" ? "" : "2px solid gray",
			borderRadius:
				ordering === "first"
					? "10px 10px 0px 0px"
					: ordering === "last"
					? "0px 0px 10px 10px"
					: "",
		},
		icon: {
			margin: "10px 3vw 10px 3vw",
		},
		accordion: {
			backgroundColor: "rgba(0,0,0,0)",
		},
		text: {
			display: "flex",
			alignItems: "center",
			fontSize: "18px",
		},
	}));

const Panel = (props) => {
	const { primary, Icon, ordering, expanded, DetailComponent } = props;

	const classes = useStyles({ ordering, expanded })();

	return (
		<div className={classes.container}>
			<Accordion className={classes.accordion}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					{Icon ? <Icon fontSize="large" className={classes.icon} /> : null}
					<p className={classes.text}>{primary}</p>
				</AccordionSummary>
				<AccordionDetails>
					{DetailComponent ? <DetailComponent /> : null}
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default Panel;
