import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class Contenido extends React.Component {
	render() {
		console.log(this.props.match.path);
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						let index = this.props.match.params.id;
						console.log(index);
						if (this.props.match.path.includes("/characters/") && store.characters[index] != undefined) {
							return (
								<div>
									<h1>Personajes</h1>
									<table className="table table-hover table-responsive">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">Name</th>
												<th scope="col">Height</th>
												<th scope="col">Mass</th>
												<th scope="col">Hair color</th>
												<th scope="col">Skin color</th>
												<th scope="col">Eye color</th>
												<th scope="col">Birth year</th>
												<th scope="col">Gender</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row" />
												<td>{store.characters[index].name}</td>
												<td>{store.characters[index].height}</td>
												<td>{store.characters[index].mass}</td>
												<td>{store.characters[index].hair_color}</td>
												<td>{store.characters[index].skin_color}</td>
												<td>{store.characters[index].eye_color}</td>
												<td>{store.characters[index].birth_year}</td>
												<td>{store.characters[index].gender}</td>
											</tr>
										</tbody>
									</table>
								</div>
							);
						} else if (this.props.match.path.includes("/planets/") && store.planets[index] != undefined) {
							return (
								<div>
									<h1>Planets</h1>
									<table className="table table-hover table-responsive">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">Name</th>
												<th scope="col">Height</th>
												<th scope="col">Mass</th>
												<th scope="col">Hair color</th>
												<th scope="col">Skin color</th>
												<th scope="col">Eye color</th>
												<th scope="col">Birth year</th>
												<th scope="col">Gender</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row" />
												<td>{store.planets[index].name}</td>
											</tr>
										</tbody>
									</table>
								</div>
							);
						} else if (this.props.match.path.includes("/vehicles/") && store.vehicles[index] != undefined) {
							return (
								<div>
									<h1>Vehicles</h1>
									<table className="table table-hover table-responsive">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">Name</th>
												<th scope="col">Height</th>
												<th scope="col">Mass</th>
												<th scope="col">Hair color</th>
												<th scope="col">Skin color</th>
												<th scope="col">Eye color</th>
												<th scope="col">Birth year</th>
												<th scope="col">Gender</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row" />
												<td>{store.vehicles[index].name}</td>
											</tr>
										</tbody>
									</table>
								</div>
							);
						}
					}}
				</Context.Consumer>
			</div>
		);
	}
}

Contenido.propTypes = {
	match: PropTypes.object
};
