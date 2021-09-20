import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
	state = {
		isLoading: true,
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 6000);
	}

	render() {
		const { isLoading } = this.state;
		console.log(isLoading);
		return <h1>{isLoading ? "Loading..." : "We are ready"}</h1>;
	}
}

export default App;
