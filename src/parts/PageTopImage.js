import React from "react";
import EmptySpacer from "./EmptySpacer";

class PageTopImage extends React.Component {
	render() {
		return (
			<div className="text-center">
				<EmptySpacer />
				<img src={this.props.src} className="top-image rounded-circle" alt={this.props.alt} />
				<EmptySpacer />
			</div>
		);
	}
}

export default PageTopImage;
