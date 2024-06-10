

import React, { Component } from "react";

class StateInClassCount extends Component {
	constructor(props) {
		super(props);

		// Set initial state
		this.state = {
			count: 0,
		};

		// Binding this keyword
		this.updateState = this.updateState.bind(this);
	}

	updateState() {
		// Changing state
		this.setState((prevState) => {
			return { count: prevState.count + 1 };
		});
	}

	render() {
		return (
			<div>
				<h2>State In class comp increment Count</h2>
				<p>
					Count {this.state.count}{" "}
					times.
				</p>
				{/* Set click handler */}
				<button onClick={this.updateState}>
					+
				</button>
			</div>
		);
	}
}

export default StateInClassCount;
