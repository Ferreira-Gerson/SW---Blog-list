import React, { useState, useEffect } from "react";

export const Vehicles = () => {
    const [ vehicle, setVehicle ] = useState([])
        
    useEffect(() => {
        fetch('https://swapi.dev/api/vehicles')
        .then((resp) =>  resp.json())
        .then((newdata) => {
            setVehicle(newdata);
            console.log("vehicle", newdata)
        })
        .catch(error => {console.log(error)})
    }, [])

    console.log(vehicle);

    const listVehicle = vehicle?.results?.map((item, index) => {
    return (

	<div className="card" key={index} style={{width: "18rem", height: "auto"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body text-start">
            <h5 className="card-title">Name: {item.name}</h5>
            <p>model: {item.model}</p>
            <p>crew: {item.crew}</p>
            <p>passengers: {item.passengers}</p>
            <button href="#" className="btn btn-primary">more infor</button>
            <button href="#" className="btn outButton float-end"><i className="fa-regular fa-heart"></i></button>
        </div>
    </div>
    )})
    return <div className="container-fluid row flex-nowrap">{listVehicle}</div>
    };
