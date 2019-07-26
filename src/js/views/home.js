import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isFetch: true
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/vehicles/")
			.then(response => response.json())
			.then(itemsJson => this.setState({ items: itemsJson.result, isFetch: false }));
	}

	render() {
		if (this.state.isFetch) {
			return "Loading...";
		}

		return this.state.items.map(item => {
			return <h1 key={index}>{items}</h1>;
		});
	}
}
