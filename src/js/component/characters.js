import React, { useState, useEffect } from "react";

 

export const Characters = () => {
    const [ people, setPeople ] = useState([])
   
        
    useEffect(() => {
        fetch('https://swapi.dev/api/people')
        .then((resp) =>  resp.json())
        .then((newdata) => {
            setPeople(newdata);
            console.log("people", newdata)
        })
        .catch(error => {console.log(error)})
    }, [])

    console.log(people);

    const listPeople = people?.results?.map((item, index) => {

        return (
    
                <div className="card " key={index} style={{width: "18rem", height: "22rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="text-start card-body" >
                        <h5 className="card-title">{item.name}</h5>  
                        <p>Height: {item.height}</p>
                        <p>Mass: {item.mass}</p>
                        <p>Gender: {item.gender}</p>
                        <p className="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button href={item.url} className="btn btn-primary">more infor</button>
                        <button href="#" className="btn "><i className="fa-regular fa-heart toggle" /></button>
                    </div>
                </div>
                
            )
    })

    return <div className="container-fluid row flex-nowrap">{listPeople}</div>

        


    
    };
