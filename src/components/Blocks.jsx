import React, { useEffect, useState } from "react";
import axios from "axios";
import Block from "./Block"
import SpecifiedBlock from "./SpecifiedBlock"


function Blocks (){
    const [data , setData] = useState([])
    const [country, setCountry] = useState("")

    useEffect(function(){
        axios.get("https://restcountries.com/v2/all").then(function(res){
            const rawData = res.data;
            setData(rawData);
        })
    });

    function eventHandle(event){
        setCountry(event.target.innerText)
        console.log(country)
    }

    


    return(
        <div className="bodyCountri">
            {country === "" ? data.map(function(element,index){
                return (
                    <Block 
                        countryName={element.name} 
                        population={element.population} 
                        region={element.region} 
                        capital={element.capital}
                        flag={element.flag}
                        handleClick={eventHandle}
                        key={index}
                        
                    />
                    )
            })  : <SpecifiedBlock updateState={setCountry} requestedCountry={country} />}
        </div>
    )
}

export default Blocks;