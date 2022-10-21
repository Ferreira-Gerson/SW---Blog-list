import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Vehicles } from "../component/vehicles";
import { Planets } from "../component/planets";

export const Home = () => (
	<div className="container-fluid">
		<div className="container">
			<h2>People</h2>
			<Characters />
			<h2>Planets</h2>
			<Planets />
			<h2>Vehicles</h2>
			<Vehicles />
		</div>
		<p>
		
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
