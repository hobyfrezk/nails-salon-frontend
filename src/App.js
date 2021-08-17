import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Contact from "pages/Contact";
import Dashboard from "pages/Dashboard";
import Footer from "components/Footer/Footer";
import Home from "pages/Home";
import NavBar from "components/NavBar/NavBar";
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
						<p>services</p>
					</Route>
					<Route path="/galary">
						<p>galary</p>
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/dashboard">
						<Dashboard />
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
