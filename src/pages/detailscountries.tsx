import React, { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import {} from 'react-bootstrap';
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/detailscountries.css";
import FadeIn from "react-fade-in";

export function Details({}) {
    var navigate = useNavigate();    
    const [change, setChange] = useState('');  
    const ccc3 = useParams();
    const [contentCountries, setContentCountries] = useState('');
    const [returnFetch, setReturnFetch] = useState('');    
    
    function handleCountries(countries: any){
        setChange(countries);
    };

    return(
        <>
            <Navbar/>
            <div className="container">
            <FadeIn>
                <div className="content-page" style={{height: '100%'}}>
                    <div className="row mt-3">
                        <div className="col">
                            <button onClick={() => navigate("/")} className="details-btn">Back</button>
                        </div>
                    </div>
                    <div className="row mt-3 align-items-center">
                        <div className="col-12 col-md-6 mb-3">
                            <img src={homeData?.flags.svg} style={{}} />
                        </div>
                        <div className="col mx-5">
                            <div className="row">
                                <h1 className="h1 h1-class">{homeData?.name.common}</h1>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="mt-2 p-class"><strong>Native Name: </strong>{homeData?.name.common}</p>
                                    <p className="mt-2 p-class"><strong>Population: </strong>{homeData?.population.toLocaleString('pt-BR')}</p>
                                    <p className="mt-2 p-class"><strong>Region: </strong>{homeData?.region}</p>
                                    <p className="mt-2 p-class"><strong>Sub Region: </strong>{homeData?.subregion}</p>
                                    <p className="mt-2 p-class"><strong>Capital: </strong>{homeData?.capital === " " ? <p> No Capital</p> : homeData?.capital}</p>
                                </div>
                                <div className="col">
                                    <p className="mt-2 p-class"><strong>Top Level Domain: </strong>{homeData.tld}.</p>
                                    <p className="mt-2 p-class"><strong>Currencies: </strong>
                                        {Object.values(homeData.currencies).map((moeda: any) => {
                                            return moeda.name;
                                        })}
                                    </p>
                                    <p className="mt-2 p-class"><strong>Languages: </strong>
                                        {Object.values(homeData.languages).map((language: any) => {
                                            return language;
                                        })}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-3" style={{ height: '100px'}}>
                                <p className="align-self-center p-class"><strong>Border Countries:</strong>
                                    {homeData?.borders?.map((border: any) => {  
                                        return (
                                        
                                            <button 
                                            className="details-btn" 
                                            onClick = {() =>{ handleCountries(border), callCountrie()}}
                                            style={{ marginLeft: '15px', marginTop: '15px'}}
                                        >
                                            {border}                                    
                                        </button>                                         
                                        )
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
            </div>
        </>
    )
}
