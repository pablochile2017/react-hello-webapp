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
							<th scope="col">Name</th>
						</tr>
					</thead>
					<Context.Consumer>
						{({ store, actions }) => {
							if ("vehicles" in store) {
								return store.vehicles.map((item, index) => {
									return (
										<tbody key={index}>
											<tr>
												<Link to={"/vehicles" + index}>
													<th scope="row" />
													<td>{item.name}</td>
												</Link>
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
