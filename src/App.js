import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import myTheme from "./components/Theme";
import { ThemeProvider } from "@material-ui/styles";

function App() {
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
		<div className="App">
			<ThemeProvider theme={myTheme}>
				<NavBar mobileView={mobileView} />
			</ThemeProvider>
		</div>
	);
}

export default App;
