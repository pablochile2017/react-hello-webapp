import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class Planets extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Planets</h1>
				<table className="table table-hover table-responsive">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">rotation_period</th>
							<th scope="col">orbital_period</th>
							<th scope="col">diameter</th>
							<th scope="col">climate</th>
							<th scope="col">gravity</th>
							<th scope="col">terrain</th>
							<th scope="col">surface_water</th>
							<th scope="col">population</th>
						</tr>
					</thead>
					<Context.Consumer>
						{({ store, actions }) => {
							if ("planets" in store) {
								return store.planets.map((item, index) => {
									return (
										<tbody key={index}>
											<tr>
												<th scope="row" />
												<td>{item.name}</td>
												<td>{item.rotation_period}</td>
												<td>{item.orbital_period}</td>
												<td>{item.diameter}</td>
												<td>{item.climate}</td>
												<td>{item.gravity}</td>
												<td>{item.terrain}</td>
												<td>{item.surface_water}</td>
												<td>{item.population}</td>
											</tr>
										</tbody>
									);
								});
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
