import React from "react";
import devIcon from "./images/github.svg";
import EmptySpacer from "./parts/EmptySpacer";

class Credits extends React.Component {
	render() {
		return (
			<div className="container">
				<EmptySpacer />
				<div className="text-center"><span className="small">Développé par </span>
					<a href="https://github.com/BaptisteV/">
						<img id="devButton" src={devIcon} alt="Credits" title="Baptiste Viloin (baptiste.viloin.iris@gmail.com)" />
					</a>
				</div>
				<EmptySpacer />
			</div>
		);
	}
}

export default Credits;
