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
												<Link to={"/planets/" + index}>
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
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="row">
								<div className="col-md-6">
									<button
										className={
											"btn btn-success btn-block m-2 " +
											(store.previousPlanets == null ? "disabled" : "")
										}
										onClick={() =>
											actions.getFetch([
												{
													url: store.previousPlanets,
													storePlace: "planets",
													nextUrl: "nextPlanets",
													prevUrl: "previousPlanets"
												}
											])
										}>
										Anterior
									</button>
								</div>
								<div className="col-md-6">
									<button
										className={
											"btn btn-success btn-block m-2" +
											(store.nextCharacters == null ? "disabled" : "")
										}
										onClick={() =>
											actions.getFetch([
												{
													url: store.nextPlanets,
													storePlace: "planets",
													nextUrl: "nextPlanets",
													prevUrl: "previousPlanets"
												}
											])
										}>
										Siguiente
									</button>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
