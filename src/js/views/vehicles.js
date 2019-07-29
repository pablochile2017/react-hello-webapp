import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class Vehicles extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Vehicles</h1>
				<table className="table table-hover table-responsive">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">model</th>
							<th scope="col">manufacturer</th>
							<th scope="col">cost_in_credits</th>
							<th scope="col">length</th>
							<th scope="col">max_atmosphering_speed</th>
							<th scope="col">crew</th>
							<th scope="col">passengers</th>
							<th scope="col">cargo_capacity</th>
							<th scope="col">consumables</th>
							<th scope="col">vehicle_class</th>
						</tr>
					</thead>
					<Context.Consumer>
						{({ store, actions }) => {
							if ("characters" in store || "planets" in store || "vehicles" in store) {
								return store.vehicles.map((item, index) => {
									return (
										<tbody key={index}>
											<tr>
												<th scope="row" />
												<td>{item.name}</td>
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
