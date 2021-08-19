import React from "react";
import { useSelector } from "react-redux";

const ProfileAccordion = () => {
	const authState = useSelector((state) => state.auth);
	const { user } = authState;
	const profile = user ? user.profile : null;

	return user ? (
		<div>
			<div>name: {user ? user.username : null}</div>
			<div>first name: {user ? user.email : "Not Given"}</div>
			<div>first name: {profile ? profile.first_name : "Not Given"}</div>
			<div>last name: {profile ? profile.last_name : "Not Given"}</div>
			<div>balance: {profile ? profile.balance : "Not Given"}</div>
			<div>tier: {profile ? profile.tier : "Not Given"}</div>
			<div>phone: {profile ? profile.phone : "Not Given"}</div>
			<div>gender: {profile ? profile.gender : "Not Given"}</div>
		</div>
	) : null;
};

export default ProfileAccordion;
