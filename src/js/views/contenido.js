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
									<h1 className="text-center mt-4 mb-4">Personaje</h1>
									<div className="card text-center">
										<img
											src="https://cdn4.iconfinder.com/data/icons/star-wars-13/50/62-512.png"
											className="mx-auto d-block mt-5"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">Nombre: {store.characters[index].name}</h5>
										</div>
										<div className="card-body">
											<ul className="list-group list-group-flush">
												<li className="list-group-item">
													Altura: {store.characters[index].height}
												</li>
												<li className="list-group-item">
													Masa: {store.characters[index].mass}
												</li>
												<li className="list-group-item">
													Color de pelo: {store.characters[index].hair_color}
												</li>
												<li className="list-group-item">
													Color de piel: {store.characters[index].skin_color}
												</li>
												<li className="list-group-item">
													Color de ojos: {store.characters[index].eye_color}
												</li>
												<li className="list-group-item">
													Fecha de nacimiento: {store.characters[index].birth_year}
												</li>
												<li className="list-group-item">
													Género: {store.characters[index].gender}
												</li>
											</ul>
										</div>
									</div>
								</div>
							);
						} else if (this.props.match.path.includes("/planets/") && store.planets[index] != undefined) {
							return (
								<div>
									<h1 className="text-center mt-4 mb-4">Planeta</h1>
									<div className="card text-center">
										<img
											src="https://cdn.pixabay.com/photo/2016/03/31/19/15/icon-1294845_960_720.png"
											className="mx-auto d-block mt-5"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-title">Nombre: {store.planets[index].name}</h5>
										</div>
										<div className="card-body">
											<ul className="list-group list-group-flush">
												<li className="list-group-item">
													Diametro: {store.planets[index].diameter}
												</li>
												<li className="list-group-item">
													Rotación:
													{store.planets[index].rotation_period}
												</li>
												<li className="list-group-item">
													Periodo Orbital:
													{store.planets[index].orbital_period}
												</li>
												<li className="list-group-item">
													Gravedad: {store.planets[index].gravity}
												</li>
												<li className="list-group-item">
													Población: {store.planets[index].population}
												</li>
												<li className="list-group-item">
													Clima: {store.planets[index].climate}
												</li>
												<li className="list-group-item">
													Terreno: {store.planets[index].terrain}
												</li>
												<li className="list-group-item">
													Superficie de Agua:
													{store.planets[index].surface_water}
												</li>
											</ul>
										</div>
									</div>
								</div>
							);
						} else if (this.props.match.path.includes("/vehicles/") && store.vehicles[index] != undefined) {
							return (
								<div>
									<h1 className="text-center mt-4 mb-4">Vehiculo</h1>
									<div className="card text-center">
										<img
											src="https://image.flaticon.com/icons/svg/43/43476.svg"
											className="mx-auto d-block mt-5"
											alt="..."
										/>
										<div className="card-body">
											<h2 className="card-title">{store.vehicles[index].name}</h2>
										</div>
										<div className="card-body">
											<ul className="list-group list-group-flush">
												<li className="list-group-item">
													Modelo: {store.vehicles[index].model}
												</li>
												<li className="list-group-item">
													Clase de vehículo:
													{store.vehicles[index].vehicle_class}
												</li>
												<li className="list-group-item">
													Manofactura:
													{store.vehicles[index].manufacturer}
												</li>
												<li className="list-group-item">
													Largo: {store.vehicles[index].length}
												</li>
												<li className="list-group-item">
													Costo:
													{store.vehicles[index].cost_in_credits}
												</li>
												<li className="list-group-item">
													Personal: {store.vehicles[index].crew}
												</li>
												<li className="list-group-item">
													Pasajeros: {store.vehicles[index].passengers}
												</li>
												<li className="list-group-item">
													Velocidad Máxima:
													{store.vehicles[index].max_atmosphering_speed}
												</li>
												<li className="list-group-item">
													Capacidad de Carga:
													{store.vehicles[index].cargo_capacity}
												</li>
												<li className="list-group-item">
													Consumibles: {store.vehicles[index].consumables}
												</li>
											</ul>
										</div>
									</div>
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
