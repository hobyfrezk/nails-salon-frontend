import React from "react";
import MobileNavBar from "./MobileNavBar"
import DesktopNavBar from "./DesktopNavBar"

const NavBar = (props) => {
	return <div>{props.mobileView ? <MobileNavBar /> : <DesktopNavBar />}</div>;
};

export default NavBar;
