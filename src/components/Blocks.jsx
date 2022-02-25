import React, { useEffect, useState } from "react";
import axios from "axios";


function Blocks (){
    const [data , setData] = useState([])

    useEffect(function(){
        axios.get("https://restcountries.com/v2/all").then(function(res){
            const rawData = res.data;
            rawData.forEach(function(element){
                console.log(element.name)
            })
        })
    });

    return(
        <p>help</p>
    )
}

export default Blocks;