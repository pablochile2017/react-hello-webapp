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
							<th scope="col">Name</th>
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
												<td>
													<Link to={"/planets/" + index}>{item.name}</Link>
												</td>
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
