import AppointmentAccordion from "components/Dashboard/AppointmentAccordion";
import { Button } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/FaceOutlined";
import HistoryIcon from "@material-ui/icons/History";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOnOutlined";
import Panel from "components/Dashboard/Panel";
import ProfileAccordion from "components/Dashboard/ProfileAccordion";
import { apiLogout } from "api/auth";
import { makeStyles } from "@material-ui/core/styles";
import { updateAuth } from "redux/authSlice";
import { updateHistoryList } from "redux/appointmentSlice";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "grid",
		placeItems: "center",
		margin: "5vw",
	},
	titleContainer: {
		display: "flex",
		width: "80vw",
		alignItems: "center",
		justifyContent: "space-between",
		margin: "15px",
	},
	title: {
		width: "70vw",
		fontSize: "25px",
		fontWeight: "600",
	},
	button: {
		width: "fit-content",
		border: "2px solid",
	},
}));

const Dashboard = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const logoutOnClick = async () => {
		const response = await apiLogout();
		console.log(response);

		if (!response.success) {
			return;
		}
		dispatch(
			updateAuth({
				auth: {
					isLoggedIn: false,
					user: {},
				},
			}),
		);
		dispatch(
			updateHistoryList({
				historyList: [],
			})
		);
	};

	return (
		<div className={classes.container}>
			<div className={classes.titleContainer}>
				<div className={classes.title}> My account</div>
				<Button className={classes.button} onClick={logoutOnClick}>
					Logout
				</Button>
			</div>
			<Panel
				primary={"My Profile"}
				DetailComponent={ProfileAccordion}
				Icon={FaceIcon}
				ordering={"first"}
			/>
			<Panel
				primary={"My Appointments"}
				Icon={HistoryIcon}
				DetailComponent={AppointmentAccordion}
			/>
			<Panel
				primary={"My Checkouts"}
				Icon={MonetizationOnIcon}
				ordering={"last"}
			/>
		</div>
	);
};

export default Dashboard;
