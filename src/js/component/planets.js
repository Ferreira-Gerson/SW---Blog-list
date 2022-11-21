import React, { useState, useEffect } from "react";


export const Planets = () => {
    const [ planet, setPlanet ] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/planets')
        .then((resp) =>  resp.json())
        .then((newdata) => {
            setPlanet(newdata);
            console.log("planet", newdata)
        })
        .catch(error => {console.log(error)})
    }, [])

    console.log(planet);

    const listPlanet = planet?.results?.map((item, index) => {
        return (
        <div className="card" key={index} style={{width: "18rem", height: "auto"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="text-start card-body">
                <h5 className="card-title">Name:{item.name}</h5>
                <p>Population: {item.population}</p>
                <p>Terrain: {item.terrain}</p>
                <button href="#" className="btn btn-primary">more infor</button>
                <button href="#" className="btn"><i className="fa-regular fa-heart"/></button>
            </div>
        </div>
        )
    })
    
    return <div className="container-fluid row flex-nowrap">{listPlanet}</div>
    };
