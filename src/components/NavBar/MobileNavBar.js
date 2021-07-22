import { MyAccount, MyAppBar, MyTitle, MyToolbar } from "components/NavBar/NavBarUtils";
import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import SideMenu from "components/NavBar/SideMenu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const MyDrawer = () => {
	const [drawerState, setDrawerState] = useState(false);

	const toggleDrawer = (state) => {
		setDrawerState(state);
	};

	return (
		<div>
			<Button onClick={() => toggleDrawer(true)}>
				<MenuIcon />
			</Button>
			<SwipeableDrawer
				open={drawerState}
				onClose={() => toggleDrawer(false)}
				onOpen={() => toggleDrawer(true)}
			>
				<SideMenu />
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
