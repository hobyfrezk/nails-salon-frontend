import NavBar from "./components/NavBar/NavBar";
import myTheme from "./components/Theme";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={myTheme}>
				<Router>
					<NavBar />

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
							<Home />
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		</div>
	);
};

export default App;
