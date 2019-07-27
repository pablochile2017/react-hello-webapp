import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class Contenido extends React.Component {
	render() {
		return (
			<div className="container">
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
					<Context.Consumer>
						{({ store, actions }) => {
							let index = this.props.match.params.id;
							if ("characters" in store) {
								return (
									<tbody>
										<tr>
											<th scope="row" />
											<td>{store.characters[index].name}</td>
											<td>{store.characters[index].heigth}</td>
											<td>{store.characters[index].mass}</td>
											<td>{store.characters[index].hair_color}</td>
											<td>{store.characters[index].skin_color}</td>
											<td>{store.characters[index].eye_color}</td>
											<td>{store.characters[index].birth_year}</td>
											<td>{store.characters[index].gender}</td>
										</tr>
									</tbody>
								);
							}
						}}
					</Context.Consumer>
				</table>
				<div className="row">
					<div className="col-md-6">
						<button
							className="btn btn-success btn-block m-2"
							onClick={() => actions.changeColor(index, "orange")}>
							Anterior
						</button>
					</div>
					<div className="col-md-6">
						<button
							className="btn btn-success btn-block m-2"
							onClick={() => actions.changeColor(index, "orange")}>
							Siguiente
						</button>
					</div>
				</div>
			</div>
		);
	}
}

Contenido.propTypes = {
	match: PropTypes.object
};
