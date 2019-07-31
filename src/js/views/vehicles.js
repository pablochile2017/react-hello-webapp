import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class Vehicles extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Vehicles</h1>
				<div clasName="container">
					<div className="row">
						<Context.Consumer>
							{({ store, actions }) => {
								if ("vehicles" in store) {
									return store.vehicles.map((item, index) => {
										return (
											<div className="col-md-3 mt-2 mb-2" key={index}>
												<Link to={"/vehicles/" + index}>
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
											(store.previousVehicles == null ? "disabled" : "")
										}
										onClick={() =>
											actions.getFetch([
												{
													url: store.previousVehicles,
													storePlace: "vehicles",
													nextUrl: "nextVehicles",
													prevUrl: "previousVehicles"
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
											(store.nextVehicles == null ? "disabled" : "")
										}
										onClick={() =>
											actions.getFetch([
												{
													url: store.nextVehicles,
													storePlace: "vehicles",
													nextUrl: "nextVehicles",
													prevUrl: "previousVehicles"
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
