import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AuthModal from "components/Accounts/AuthModal";
import Button from "@material-ui/core/Button";
import { MyListItem } from "./NavBarUtils";
import { loginStatus } from "api/auth";
import { makeStyles } from "@material-ui/core/styles";
import { updateAuth } from "redux/authSlice";

const MyAccountStyle = makeStyles({
	container: {
		display: "flex",
	},
});

const textStyle = makeStyles({
	listItem: {
		color: "black",
	},
});

export const MyAccount = () => {
	/* 
	component which control logged in button onClick behavior
		- logged in  -> router to home dashboard
		- unloged in -> loggin modal
	*/

	const classes = MyAccountStyle();

	const [modalState, setModalState] = useState({ open: false, type: "login" });
	const { open, type } = modalState;

	const dispatch = useDispatch();

	const authState = useSelector((state) => state.auth);
	const { isLoggedIn, user } = authState;

	useEffect(() => {
		async function getLoginStatus() {
			const response = await loginStatus();
			console.log(response);
			dispatch(
				updateAuth({
					auth: {
						isLoggedIn: response.has_logged_in,
						user: response.user,
					},
				})
			);
		}
		getLoginStatus();
	}, []);

	const handleOpen = () => {
		if (!isLoggedIn) {
			// if not loggedIn, button onClick behavior is open log in modal
			setModalState((prev) => ({ ...prev, open: true }));
		} else {
			// else open homepage dashboard
			console.log("open user manage page");
		}
	};

	const handleClose = () => {
		setModalState((prev) => ({ ...prev, open: false }));
	};

	const loginState = () => {
		setModalState((prev) => ({ ...prev, type: "login" }));
	};

	const signUpState = () => {
		setModalState((prev) => ({ ...prev, type: "signup" }));
	};

	return (
		<div className={classes.container}>
			{isLoggedIn ? (
				<MyListItem
					to="/dashboard"
					primary={`Hi, ${user.username.toUpperCase()}`}
					icon={<AccountCircleIcon />}
					style={textStyle}
				/>
			) : (
				<Button onClick={handleOpen}>
					<AccountCircleIcon />
				</Button>
			)}

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
