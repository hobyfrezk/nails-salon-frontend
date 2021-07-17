import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import SideMenu from "./SideMenu";
import { MyAppBar, MyToolbar, MyTitle, MyAccount } from "./NavBarUtils";

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
		<div>
			<MyAppBar position="static">
				<MyToolbar>
					<MyDrawer />
					<MyTitle />
					<MyAccount />
				</MyToolbar>
			</MyAppBar>
		</div>
	);
};

export default MobileNavBar;
