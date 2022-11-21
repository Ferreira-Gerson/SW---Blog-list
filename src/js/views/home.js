import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Vehicles } from "../component/vehicles";
import { Planets } from "../component/planets";

export const Home = () => (
	<div className="container-fluid">
		<div className="container">
			<h2 className="text-danger">People</h2>
			<div className="row scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-scroll">
				<Characters />
			</div>
			<h2 className="text-danger">Planets</h2>
			<div className="row scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-scroll"> 
			<Planets />
			</div>
			<h2 className="text-danger">Vehicles</h2>
			<div className="row scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-scroll"> 
			<Vehicles />
			</div>
		</div>
		<p>
		
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
