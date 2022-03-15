import React, { useEffect, useState } from "react";
import axios from "axios";



function SpecifiedBlock(props){

    const [singleData , setSingleData] = useState([])
    let currenci = ""
    let language = ""
    var address = `https://restcountries.com/v2/name/${props.requestedCountry}?fullText=true`

    useEffect(function(){
        axios.get(address).then(function(res){
            const rawData = res.data;
            setSingleData(rawData[0]);
        })
    });

    if (Array.isArray(singleData.currencies)) {
        currenci = (singleData.currencies[0].name)
    } else {
        console.log('arr is not an array');
    }

    if (Array.isArray(singleData.languages)) {
        language = (singleData.languages[0].name);
    } else {
        console.log('arr is not an array');
    }

    function handleClick(){
        props.updateState("")
    }


    return(
        <div>
            <button onClick={handleClick} type="button" className="specBTN btn btn-light"><i className="bi bi-arrow-left"></i> Back</button>
            <div className="specBlock">
                <div className="inline"><img width="520" height="340" src={singleData.flag} /></div>
                <div className="specInfo inline">
                    <h4><b>{singleData.name}</b></h4>
                    <table>
                        <tr>
                            <th>Native Name:</th>
                            <td className="table-padding">{singleData.nativeName}</td>
                            <th>Top Level Domain:</th>
                            <td>{singleData.topLevelDomain}</td>
                        </tr>
                        <tr>
                            <th>Population:</th>
                            <td className="table-padding">{singleData.population} </td>
                            <th>Currencies:</th>
                            <td>{currenci}</td>
                        </tr>
                        <tr>
                            <th>Region:</th>
                            <td className="table-padding">{singleData.region}</td>
                            <th>Languages:</th>
                            <td>{language}</td>
                        </tr>
                        <tr>
                            <th>Sub Region:</th>
                            <td className="table-padding">{singleData.subregion}</td>
                            <th>Capital:</th>
                            <td>{singleData.capital}</td>  
                        </tr>
                        </table>

                </div>
            </div>
        </div>
    )
}

export default SpecifiedBlock;