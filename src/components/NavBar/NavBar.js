import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

const NavBar = ({mobileView}) => {
	
	return <div>{mobileView ? <MobileNavBar /> : <DesktopNavBar />}</div>;
};

export default NavBar;
