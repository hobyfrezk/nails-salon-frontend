import FaceIcon from "@material-ui/icons/FaceOutlined";
import HistoryIcon from "@material-ui/icons/History";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOnOutlined";
import Panel from "components/Dashboard/Panel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "grid",
		placeItems: "center",
		margin: "5vw",
	},
	title: {
		width: "80vw",
		fontSize: "25px",
		fontWeight: "600",
		marginBottom: "3vw",
	},
}));

const Dashboard = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.title}> My account</div>
			<Panel primary={"My Profile"} Icon={FaceIcon} ordering={"first"} />
			<Panel primary={"My Appointments"} Icon={HistoryIcon} />
			<Panel
				primary={"My Checkouts"}
				Icon={MonetizationOnIcon}
				ordering={"last"}
			/>
		</div>
	);
};

export default Dashboard;
