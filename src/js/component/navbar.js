import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3 container">
				<div className="col-md-3">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">
							<img
								src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG28.png"
								className="mx-auto d-block mt-5 img-fluid"
								alt="..."
							/>
						</span>
					</Link>
				</div>
				<div className="col-md-3">
					<Link to="/">
						<button className="btn btn-block btn-info h1">Personajes</button>
					</Link>
				</div>
				<div className="col-md-3">
					<Link to="/planets">
						<button className="btn btn-block btn-info h1">Planets</button>
					</Link>
				</div>
				<div className="col-md-3">
					<Link to="/vehicles">
						<button className="btn btn-block btn-info h1">Vehicles</button>
					</Link>
				</div>
			</nav>
		);
	}
}
