import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Specialite from "./Specialites";
import Presentation from "./Presentation";
import Contact from "./Contact";

class App extends React.Component {
	render() {
		return (
			<div id="app-container" className="container">
				<Header />
				<Switch>
					<Route exact path="/" component={Presentation} />
					<Route exact path="/specialite" component={Specialite} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</div>
		);
	}
}

export default App;
