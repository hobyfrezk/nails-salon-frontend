import React, { useState } from "react";

import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { TextFont } from "components/Theme";
import { apiLogin } from "../../api/auth";
import { makeStyles } from "@material-ui/core/styles";
import { updateAuth } from "redux/authSlice";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
	container: {
		position: "absolute",
		backgroundColor: "white",
		width: "40vw",
		height: "30vh",
		minHeight: "350px",
		borderRadius: "10px",
		top: `50%`,
		left: `50%`,
		transform: `translate(-50%, -50%)`,
		fontFamily: TextFont,
		boxShadow: "0px 0px 3px 1px gray", 

		[theme.breakpoints.down("sm")]: {
			width: "90vw",
			height: "30vh",
		},
	},
	sideImg: {
		width: "100%",
		height: "30vh",
		minHeight: "350px",
		borderRadius: "15px 0 0 15px",
		objectFit: "cover",
		aspectRatio: "2/3",
		[theme.breakpoints.down("sm")]: {
			height: "30vh",
			minHeight: "350px",
		},
	},
	body: {
		height: "30vh",
		minHeight: "350px",

		width: "100%",
		[theme.breakpoints.down("sm")]: {
			height: "30vh",
			minHeight: "350px",
		},
	},
	title: {
		fontSize: "3rem",
		marginBottom: "20px",
		[theme.breakpoints.down("sm")]: {
			fontSize: "2rem",
			marginBottom: "40px",
		},
	},
	input: {
		width: "85%",
		border: "0",
		borderBottom: "2px solid gray",
		backgroundColor: "transparent",
		outline: "0",
		marginBottom: "30px",
		"&:focus": {
			borderBottom: "3px solid black",
		},
	},
	buttonLogin: {
		width: "150px",
		border: "1px solid black",
		backgroundColor: "rgba(80, 84, 37)",
		color: "rgba(230, 212, 163)",
		borderRadius: "0",
		margin: "5px",
	},
	buttonRegister: {
		width: "150px",
		border: "1px solid black",
		backgroundColor: "rgba(84, 37, 56)",
		color: "rgba(230, 212, 163)",
		borderRadius: "0",
		margin: "5px",
	},
}));

const LoginModal = ({ open, handleClose, signUpState, setAuthState }) => {
	const [loginData, setLoginData] = useState({ username: "", password: "" });
	const dispatch = useDispatch();

	const onChanged = (event) => {
		setLoginData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const loginOnClick = async () => {
		const response = await apiLogin(loginData);
		console.log(response);
		dispatch(
			updateAuth({
				auth: {
					isLoggedIn: response.success,
					user: response.user,
				},
			})
		);
	};

	const classes = useStyles();
	return (
		<Modal open={open} onClose={handleClose}>
			<div className={classes.container}>
				<Grid container spacing={3}>
					<Grid item xs={5}>
						<img
							src={"./homepage/maria-lupan-ZiZ4q21W9vc-unsplash.jpg"}
							className={classes.sideImg}
							alt="sideImg"
						/>
					</Grid>
					<Grid item xs={7}>
						<div className={classes.body}>
							<p className={classes.title}>Login</p>
							<input
								type="text"
								className={classes.input}
								placeholder="Username"
								onChange={onChanged}
								name="username"
							/>
							<input
								type="password"
								className={classes.input}
								placeholder="Password"
								onChange={onChanged}
								name="password"
							/>
							<Button onClick={loginOnClick} className={classes.buttonLogin}>
								Login
							</Button>
							<Button onClick={signUpState} className={classes.buttonRegister}>
								Register
							</Button>
						</div>
					</Grid>
				</Grid>
			</div>
		</Modal>
	);
};

export default LoginModal;
