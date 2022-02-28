
import React from "react"

function Block(props){
    return(
        <div className="blockSty">
            <h4><b>{props.countryName}</b></h4>
            <div className="moreInfo">
                <p><b>Population: </b>{props.population}</p>
                <p><b>Region: </b>{props.region}</p>
                <p><b>Capital: </b>{props.capital}</p>
            </div>
        </div>
    )
}

export default Block;