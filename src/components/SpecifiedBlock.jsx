import React, { useEffect, useState } from "react";
import axios from "axios";



function SpecifiedBlock(props){

    const [singleData , setSingleData] = useState([])
    var address = `https://restcountries.com/v2/name/${props.requestedCountry}?fullText=true`

    useEffect(function(){
        axios.get(address).then(function(res){
            const rawData = res.data;
            setSingleData(rawData[0]);
        })
    });


    return(
        <div className="specBlock">
            <div><img width="520" height="340" src={singleData.flag} /></div>
            <div className="spec">
                <h4>{singleData.name}</h4>
            </div>
        </div>
    )
}

export default SpecifiedBlock;