import { MyAppBar, MyTitle, MyToolbar } from "components/NavBar/NavBarUtils";
import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { MyAccount } from "./MyAccount";
import SideMenu from "components/NavBar/SideMenu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const MyDrawer = () => {
	const [drawerState, setDrawerState] = useState(false);

	const toggleDrawer = () => {
		setDrawerState(~drawerState);
	};

	return (
		<div>
			<Button onClick={() => toggleDrawer()}>
				<MenuIcon />
			</Button>
			<SwipeableDrawer
				open={drawerState}
				onClose={() => toggleDrawer()}
				onOpen={() => toggleDrawer()}
			>
				<SideMenu toggleDrawer={toggleDrawer}/>
			</SwipeableDrawer>
		</div>
	);
};

const MobileNavBar = () => {
	return (
		<MyAppBar position="static">
			<MyToolbar>
				<MyDrawer />
				<MyTitle />
				<MyAccount />
			</MyToolbar>
		</MyAppBar>
	);
};

export default MobileNavBar;
