import React, { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import {} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "../styles/detailscountries.css";
import FadeIn from "react-fade-in";

export function Details() {
    var gethomedata: any = JSON.parse(localStorage.getItem('homedata')!);
    var navigate = useNavigate();
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
                            <img src={gethomedata?.flags.svg} style={{}} />
                        </div>
                        <div className="col mx-5">
                            <div className="row">
                                <h1 className="h1 h1-class">{gethomedata?.name.common}</h1>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="mt-2 p-class"><strong>Native Name: </strong>{gethomedata?.name.common}</p>
                                    <p className="mt-2 p-class"><strong>Population: </strong>{gethomedata?.population}</p>
                                    <p className="mt-2 p-class"><strong>Region: </strong>{gethomedata?.region}</p>
                                    <p className="mt-2 p-class"><strong>Sub Region: </strong>{gethomedata?.subregion}</p>
                                    <p className="mt-2 p-class"><strong>Capital: </strong>{gethomedata?.capital === " " ? <p> No Capital</p> : gethomedata?.capital}</p>
                                </div>
                                <div className="col">
                                    <p className="mt-2 p-class"><strong>Top Level Domain: </strong>{gethomedata.tld}.</p>
                                    <p className="mt-2 p-class"><strong>Currencies: </strong>
                                        {Object.values(gethomedata.currencies).map((moeda: any) => {
                                            return moeda.name;
                                        })}
                                    </p>
                                    <p className="mt-2 p-class"><strong>Languages: </strong>
                                        {Object.values(gethomedata.languages).map((language: any) => {
                                            return language;
                                        })}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-3" style={{ height: '100px'}}>
                                <p className="align-self-center p-class"><strong>Border Countries:</strong>
                                    {gethomedata?.borders?.map((border: any) => {
                                        console.log(border);
                                        return (
                                        <a className="details-btn" style={{ marginLeft: '15px', marginTop: '15px'}}>{border}</a> 
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
