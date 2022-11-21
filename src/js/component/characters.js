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
    
                <div className="card" key={index} style={{width: "18rem", height: "auto"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="text-start card-body" >
                        <h5 className="card-title">{item.name}</h5>  
                        <p>Gender: {item.gender}</p>
                        <p>Eye Color: {item.eye_color}</p>
                        <p>Hair Color: {item.hair_color}</p>
                        <button href={item.url} className="btn btn-primary">more infor</button>
                        <a href="#" className="btn outButton float-end "><i className="fa-regular fa-heart toggle " /></a>
                    </div>
                </div>
                
            )
    })

    return <div className="container-fluid row flex-nowrap">{listPeople}</div>

        


    
    };
