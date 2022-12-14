import React from "react";
import { Link } from "react-router-dom";
import  Image  from "../../img/icons8-star-wars-50.png"

export const Navbar = () => {

	return (
		<div className="container">
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src={Image}></img></span>
			</Link>
			<div className="ml-auto">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorite </button>
			</div>
		</nav>
		</div>
	);
};
