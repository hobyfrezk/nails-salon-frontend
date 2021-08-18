import React from "react";
import { useSelector } from "react-redux";

const ProfileAccordion = () => {
	const authState = useSelector((state) => state.auth);
	const { user } = authState;

	return (
		<div>
			<div>name: {user ? user.username : null}</div>
      <div>first name: {user ? user.email: "Not Given"}</div>
			<div>first name: {user ? user.profile.first_name: "Not Given"}</div>
      <div>last name: {user ? user.profile.last_name: "Not Given"}</div>
      <div>balance: {user ? user.profile.balance: "Not Given"}</div>
      <div>tier: {user ? user.profile.tier: "Not Given"}</div>
      <div>phone: {user ? user.profile.phone: "Not Given"}</div>
      <div>gender: {user ? user.profile.gender: "Not Given"}</div>
		</div>
	);
};

export default ProfileAccordion;
