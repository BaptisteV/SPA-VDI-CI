import React from "react";
import { NavLink, Link } from "react-router-dom";
import vdiLogo from "./images/vdi-icon-with-text.png";
import "./css/header.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { selected: 0 };
	this.linkClicked = this.linkClicked.bind(this);
	
    this.links = [
      { text: "Présentation", link: "/" },
      { text: "Specialité", link: "/specialite" },
      { text: "Contact", link: "/contact" }
    ];
  }

  linkClicked(selected) {
    this.setState({ ...this.state, selected });
  }

  render() {
    return (
      <div className="container">
        <Link to="/">
            <div className="text-center">
              <img
                src={vdiLogo}
                alt="VDI Logo"
                className="slow-fadein"
                id="vdi-logo"
              />
          </div>
        </Link>

        <div className="row">
          <nav className="navbar col navbar-light rounded">
            {this.links.map((navlink, i) => {
              return (
                <NavLink
				  key={i}
                  className="navbar-text"
                  onClick={() => this.linkClicked(i)}
                  to={navlink.link}
                >
                  <BoldText
                    text={navlink.text}
                    bold={this.state.selected === i}
                  />
                  <UnderLiner visible={this.state.selected === i}></UnderLiner>
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>
    );
  }
}

class UnderLiner extends React.Component {
  render() {
    return this.props.visible ? (
      <hr className="underliner quick-fadein" />
    ) : (
      <hr style={{ visibility: "hidden" }} />
    );
  }
}

class BoldText extends React.Component {
  render() {
    return this.props.bold ? (
      <p style={{ fontWeight: "bold" }}>{this.props.text}</p>
    ) : (
      <p>{this.props.text}</p>
    );
  }
}

export default Header;
