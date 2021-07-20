import NavBar from "./components/NavBar/NavBar";
import myTheme from "./components/Theme";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";


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
				<NavBar mobileView={mobileView}/>

				<Switch>
					<Route path="/services">
						<p>services</p>
					</Route>
					<Route path="/galary">
						<p>galary</p>
					</Route>
					<Route path="/contact">
						<p>contact</p>
					</Route>
					<Route path="/">
						<Home mobileView={mobileView}/>
					</Route>
				</Switch>
			</Router>
			<Footer mobileView={mobileView}/>
		</ThemeProvider>
	);
};

export default App;
