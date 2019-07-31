import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class Planets extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Planets</h1>
				<div clasName="container">
					<div className="row ">
						<Context.Consumer>
							{({ store, actions }) => {
								if ("planets" in store) {
									return store.planets.map((item, index) => {
										return (
											<div className="col-md-3 mt-2 mb-2" key={index}>
												<Link to={"/planets/" + index}>
													<div className="card">
														<div className="card-body">
															<h5 className="card-title">{item.name}</h5>
														</div>
													</div>
												</Link>
											</div>
										);
									});
								}
							}}
						</Context.Consumer>
					</div>
				</div>
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
