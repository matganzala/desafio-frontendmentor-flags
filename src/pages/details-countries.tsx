import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { useNavigate } from "react-router-dom";
import { getCountriescca3 } from "../API/apicountries";
import { Navbar } from "../components/navbar";

export function Details() {
    const [borders, setBorders] = useState('');    
    var getDataCountries = JSON.parse(localStorage.getItem('countries')!);
    var navigate = useNavigate();

    function backHome(){
        navigate("/");
    };

    async function awaitBordersApi(){
        getCountriescca3(borders);
    };

    useEffect(() => {
        if(borders != ""){
            awaitBordersApi();
        }
        
    }, [borders]);

    return( 
        <>
            <div className="content-countries">
                <Navbar/>                    
                <div className="container">
                    <div className="row">
                        <button 
                            className="back-button" 
                            onClick={backHome}>
                            BACK
                        </button>
                        <div className="flags mt-5">
                            <img                                         
                                src={getDataCountries?.flags.svg} 
                                className="img-thumbnail w-100 h-100"
                                style={{objectFit: 'cover', maxHeight: '300px', maxWidth:' 600px'}}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex flex-row">
                            {
                                getDataCountries.borders == undefined ? 
                                    "SEM FRONTEIRAS" : 
                                getDataCountries.borders.map((border: any, index: any) => {       
                                    console.log(borders)                             
                                    return(
                                        <>
                                            <button 
                                                key={index}
                                                className="border-button" 
                                                onClick={(e: any) => {setBorders(e.target.value)}} 
                                                value={border}
                                            >
                                                {border}
                                            </button>
                                        </>
                                    )
                                })
                            };
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
