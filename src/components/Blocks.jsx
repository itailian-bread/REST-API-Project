import React, { useEffect, useState } from "react";
import axios from "axios";
import Block from "./Block"
import SpecifiedBlock from "./SpecifiedBlock"


function Blocks (){
    const [data , setData] = useState([])
    const [country, setCountry] = useState("home")

    useEffect(function(){
        axios.get("https://restcountries.com/v2/all").then(function(res){
            const rawData = res.data;
            setData(rawData);
        })
    });

    function eventHandle(event){
        setCountry(event.target.innerText)
    }

    


    return(
        <div className="bodyCountri">
            {country === "home" ? data.map(function(element){
                return (
                    <Block 
                        countryName={element.name} 
                        population={element.population} 
                        region={element.region} 
                        capital={element.capital}
                        flag={element.flag}
                        handleClick={eventHandle}
                        
                    />
                    )
            })  : <SpecifiedBlock requestedCountry={country} />}
        </div>
    )
}

export default Blocks;