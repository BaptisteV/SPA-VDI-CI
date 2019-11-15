import React from "react";
import { NavLink, Link } from "react-router-dom";
import vdiLogo from "./images/vdi-icon-with-text.png";
import "./css/header.css";

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			selected: 0,
		};
		this.presentationClicked = this.presentationClicked.bind(this);
		this.specialitesClicked = this.specialitesClicked.bind(this);
		this.contactClicked = this.contactClicked.bind(this);
	}

	presentationClicked() {
		this.setState({ selected: 0 });
	}

	specialitesClicked() {
		this.setState({ selected: 1 });
	}

	contactClicked() {
		this.setState({ selected: 2 });
	}

	render() {
		return (
			<div className="container">
				<Link to="/">
					<div className="col-md-12">
						<div className="text-center">
							<img src={vdiLogo} alt="VDI Logo" id="vdi-logo" />
						</div>
					</div>
				</Link>

				<div className="row">
					<nav className="navbar navbar-light col-md-12 rounded">
						<NavLink className="navbar-text" onClick={this.presentationClicked} to="/">
							<BoldText text="Presentation" bold={this.state.selected === 0} />
							<UnderLiner visible={this.state.selected === 0}></UnderLiner>
						</NavLink>
						<NavLink className="navbar-text" onClick={this.specialitesClicked} to="/specialite">
							<BoldText text="Specialites" bold={this.state.selected === 1} />
							<UnderLiner visible={this.state.selected === 1}></UnderLiner>
						</NavLink>
						<NavLink className="navbar-text" onClick={this.contactClicked} to="/contact">
							<BoldText text="Contact" bold={this.state.selected === 2} />
							<UnderLiner visible={this.state.selected === 2}></UnderLiner>
						</NavLink>
					</nav>
				</div>
			</div>
		);
	}
}

class UnderLiner extends React.Component {
	render() {
		return this.props.visible ? <hr className="underliner quick-fadein" /> : <hr style={{ visibility: "hidden" }} />;
	}
}

class BoldText extends React.Component {
	render() {
		return this.props.bold ? <p style={{ fontWeight: "bold" }}>{this.props.text}</p> : <p>{this.props.text}</p>;
	}
}

export default Header;
