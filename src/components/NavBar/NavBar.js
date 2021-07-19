import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";
import React, { useState, useEffect } from "react";

const NavBar = () => {
	const [state, setState] = useState({
		mobileView: false,
	});

	const { mobileView } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};

		setResponsiveness();
		window.addEventListener("resize", () => setResponsiveness());

		return () => {
			window.removeEventListener("resize", () => setResponsiveness());
		};
	}, [mobileView]);

	return <div>{mobileView ? <MobileNavBar /> : <DesktopNavBar />}</div>;
};

export default NavBar;
