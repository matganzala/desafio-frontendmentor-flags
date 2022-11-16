import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { Params, useNavigate, useParams } from "react-router-dom";
import { getName } from "../API/apicountries";
import { MapDetails } from "../components/map-details";
import { Navbar } from "../components/navbar";

export function Details() {
    const [borders, setBorders] = useState(''); 
    const [details, setDetails] = useState();
    const params = useParams<Params>();
    //console.log(params.details)

    async function awaitGetCountriesName(){
        setDetails(await 
            getName(params.details
                    .toLowerCase()
                    .replace(/'/g, '')
                    .toString())
                    .then());        
    }

    useEffect(() => {
        awaitGetCountriesName();
    }, [])
    // async function awaitBordersApi(){
    //     getCountriescca3(borders);
    // };

   

    return( 
        <>
            <div className="content-countries">
                <Navbar/>
                <MapDetails details={details}/>          
            </div>
        </> 
    )
}
