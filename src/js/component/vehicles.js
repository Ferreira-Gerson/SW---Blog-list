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

	<div className="card" key={index} style={{width: "22rem", height: "24rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body text-start">
            <h5 className="card-title">Name: {item.name}</h5>
            <p>model: {item.model}</p>
            <p>crew: {item.crew}</p>
            <p>passengers: {item.passengers}</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button href="#" className="btn btn-primary">more infor</button>
            <button href="#" className="btn"><i className="fa-regular fa-heart"></i></button>
        </div>
    </div>
    )})
    return <div className="container-fluid row flex-nowrap">{listVehicle}</div>
    };
