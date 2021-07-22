import DesktopNavBar from "components/NavBar/DesktopNavBar";
import MobileNavBar from "components/NavBar/MobileNavBar";

const NavBar = ({mobileView}) => {
	return <div>{mobileView ? <MobileNavBar /> : <DesktopNavBar />}</div>;
};

export default NavBar;
