import React, { useEffect, useState } from "react";
import axios from "axios";
import Block from "./Block"


function Blocks (){
    const [data , setData] = useState([])

    useEffect(function(){
        axios.get("https://restcountries.com/v2/all").then(function(res){
            const rawData = res.data;
            setData(rawData)
        })
    });

    return(
        <div className="bodyCountri">
            {data.map(function(element){
                return (
                    <Block 
                        countryName={element.name} 
                        population={element.population} 
                        region={element.region} 
                        capital={element.capital}
                        
                    />
                    )
            })}
        </div>
    )
}

export default Blocks;