import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";

export function Details() {
    var getDataCountries = JSON.parse(localStorage.getItem('countries')!);
    const [borders, setBorders] = useState(getDataCountries.borders);
    var navigate = useNavigate();
    console.log(borders);

    return( 
        <>
            <div className="content-countries">
                <Navbar/>
                    <FadeIn>
                        <div className="container ">
                            <div className="row d-flex mt-5 justify-content-around ">
                                <div className="col d-flex flex-column">
                                    <button>BACK</button>
                                    <img src={getDataCountries?.flags.svg} style={{maxHeight: '150px', maxWidth: '150px'}}/>
                                </div>
                                <div className="col d-flex flex-column">
                                    <span>{getDataCountries?.name.common}</span>
                                    <span>{getDataCountries?.name.official}</span>
                                    <span>{getDataCountries?.population}</span>
                                    <span>{getDataCountries?.region}</span>
                                    <span>{getDataCountries?.subRegion}</span>
                                    <span>{getDataCountries?.capital}</span>
                                </div>
                                <div className="col d-flex flex-column">
                                    <span>{getDataCountries?.tld}</span>
                                    <span>
                                        {Object.values(getDataCountries.currencies).map((coin: any) => {
                                            return coin.name;
                                        })}
                                    </span>
                                    <span>
                                        {Object.values(getDataCountries.languages).map((language: any) => {
                                            return language;
                                        })};
                                    </span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
            </div>
        </>
    )
}
