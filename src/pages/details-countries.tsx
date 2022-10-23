import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";

export function Details() {
    var getDataCountries = JSON.parse(localStorage.getItem('countries')!);
    const [borders, setBorders] = ("");        
    var navigate = useNavigate();
    console.log(borders);

    function backHome(){
        navigate("/");
    }

    return( 
        <>
            <div className="content-countries">
                    <Navbar/>                    
                    <div className="container" >
                        <div className="row">
                            <div className="col-12 col-md-7 mt-5">
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
                            <div className="col-12 col-md-4 d-flex justify-content-center mt-lg-5">
                                <div className="row mt-lg-5">
                                    <div className=" mt-lg-5 col-12 col-md-6 d-flex" style={{marginTop: '25px'}}>                                    
                                        <span >{getDataCountries?.name.common}</span>
                                    </div>
                                    <div className="mt-lg-4 col-12 col-md-12 d-flex mb-5">
                                        <div className=" d-flex flex-column">
                                            <div className="mt-1">
                                                <span>Name: </span>
                                                <span>{getDataCountries?.name.official}</span>
                                            </div>
                                            <div className="mt-1">
                                                <span>Population: </span>
                                                <span>{getDataCountries?.population.toLocaleString('pt-BR')}</span>
                                            </div>
                                            <div className="mt-1">
                                                <span>Region: </span>
                                                <span>{getDataCountries?.region}</span>
                                            </div>
                                            <div className="mt-1">
                                                <span>SubRegion: </span>
                                                <span>{getDataCountries?.subRegion}</span>
                                            </div>
                                            <div className="mt-1">
                                                <span>Capital: </span>
                                                <span>{getDataCountries?.capital}</span>
                                            </div>
                                            <div className="mt-3">
                                                <span>Borders: </span>
                                            </div>
                                            <div className=" d-flex flex-wrap">                                                                                                
                                                {getDataCountries.borders.map((border: string) => {
                                                    return (
                                                        <div className="border-button mt-2 ms-1 d-flex flex-wrap align-items-center justify-content-center">
                                                            <span>{border}</span>
                                                        </div> 
                                                    ) 
                                                })}
                                            </div>
                                        </div> 
                                        <div className="d-flex flex-column">
                                            <div className="mt-1">
                                                <span>Tld: </span>
                                                <span className="mt-1">{getDataCountries?.tld}</span>                                            
                                            </div>
                                            <div className="mt-1 d-flex">
                                                <span className="mt-1 me-1">Currencies: </span>
                                                <span className="mt-1">
                                                    {Object.values(getDataCountries.currencies).map((coin: any) => {
                                                        return coin.name;
                                                    })}
                                                </span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="mt-1">
                                                    <span>Language: </span>
                                                    {Object.values(getDataCountries.languages).map((language: any) => {
                                                        return (<span className="mx-1">{language}</span>);
                                                    })};
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                    
            </div>
        </>
    )
}
