import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { useNavigate, useParams } from "react-router-dom";
import { getCountriescca3 } from "../API/apicountries";
import { Navbar } from "../components/navbar";

export function Details() {
    const [borders, setBorders] = useState(''); 
    const { ObjectCountries } = useParams();
    console.log(ObjectCountries);


    // async function awaitBordersApi(){
    //     getCountriescca3(borders);
    // };

   

    return( 
        <>
            <div className="content-countries">
                <Navbar/>            
            </div>
        </>
    )
}
