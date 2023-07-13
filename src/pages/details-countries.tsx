import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { Navigate, Params, useNavigate, useParams } from "react-router-dom";
import { getCCA3 } from "../API/apicountries";
import { Mapdetails } from "../components/map-details";
import { Navbar } from "../components/navbar";

export function Details() {
    const [details, setDetails] = useState('');
    const params: any = useParams<Params>();
    var navigate = useNavigate();
    
    async function awaitGetCountries(){
        setDetails(await 
            getCCA3(params?.details
                    .toLowerCase()
                    .replace(/'/g, '')
                    .toString())
                    .then());        
    };

    useEffect(() => {
        awaitGetCountries();
    }, []);

    return( 
        <>
            <div className="content-countries">
                <Navbar/>
                <Mapdetails 
                    details={details} 
                />          
            </div>
        </> 
    )
}
