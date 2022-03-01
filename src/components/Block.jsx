
import React from "react"

function Block(props){
    return(
        <div className="blockSty">
            <img width="300" height="180" src={props.flag} alt={props.countryName}></img>
            <div className="moreInfo">
                <h4><b>{props.countryName}</b></h4>
                <p><b>Population: </b>{props.population}</p>
                <p><b>Region: </b>{props.region}</p>
                <p><b>Capital: </b>{props.capital}</p>
            </div>
        </div>
    )
}

export default Block;