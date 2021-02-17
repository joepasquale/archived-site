import React from 'react';

class Greet extends React.Component {

	constructor(props) {
		super(props);

		this.state = { val: "awesome" };
	}


	changeValue = () => {
		if (this.state.val == "wonderful") {
			this.setState(
				{ val: "awesome" }
			);
		}
		else {
			this.setState(
				{ val: "wonderful" }
			);
		}
	}

	render() {
		return (
			<div>
				<h1>Hello {this.state.val} World</h1>
				<button type="button" onClick={this.changeValue}>Change value</button>
			</div>
		);
	}
}


export default Greet;