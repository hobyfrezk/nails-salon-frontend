import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Contact from "pages/contact/Contact";
import Footer from "components/Footer/Footer";
import Home from "pages/homepage/Home";
import NavBar from "components/NavBar/NavBar";
import Price from "pages/servicePage/Service";
import { ThemeProvider } from "@material-ui/styles";
import myTheme from "components/Theme";

const App = () => {
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

	return (
		<ThemeProvider theme={myTheme}>
			<Router>
				<NavBar mobileView={mobileView} />

				<Switch>
					<Route path="/services">
						<Price mobileView={mobileView}/>
					</Route>
					<Route path="/galary">
						<p>galary</p>
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/dashboard">
						<p>dashboard</p>
					</Route>
					<Route path="/">
						<Home mobileView={mobileView} />
					</Route>
				</Switch>
			</Router>

			<Footer mobileView={mobileView} />
		</ThemeProvider>
	);
};

export default App;
