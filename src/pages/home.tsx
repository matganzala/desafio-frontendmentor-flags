import React, { useEffect, useState } from "react";
import '../styles/global.css';
import FadeIn from 'react-fade-in';
import { Countries } from "../components/countries";
import { Navbar } from "../components/navbar";
import { InputFilter, SelectFilter } from "./util";
import { useNavigate } from "react-router-dom";

export function Home() { 
    const [search, setSearch] = useState("");
    const [filterRegion, setFilterRegion] = useState("");
    const [countries, setCountries] = useState('');
    const [idParams, setIdParams] = useState(''); 
    var navigate = useNavigate();

    function returnInformation(
        name: any, 
        flag: any, 
        cca3: any, 
        nativeName: any, 
        population: any, 
        region: any, 
        subRegion: any, 
        capital: any,
        topLevelDomain: any,
        currencies: any,
        languages: any,
        borders: any){
        const returnNewContries: any =
            {
                name: name,
                flag: flag,
                cca3: cca3,
                nativeName: nativeName,
                population: population,
                region: region,
                subRegion: subRegion,
                capital: capital,
                topLevelDomain: topLevelDomain,
                currencies: currencies,
                languages: languages,
                borders: borders
            }        
            setIdParams(returnNewContries); 
          
    }

    useEffect(() => {   
        if(idParams != ''){
            console.log(idParams)
            //localStorage.setItem('dataInformation', JSON.stringify(idParams));
            //navigate('/details');
        }else{
            console.log("Error");
        }      
    }, [idParams]);
    
    return(
        <>
            <div className="content-countries">
                <Navbar/>
                    <div className="container">
                    <FadeIn>
                        <div className="row d-flex justify-content-center mt-5 mb-5">
                            <div className="col-12 col-md-6">
                                <InputFilter setSearch={setSearch} />  
                            </div>
                            <div className="col-12 col-md-4 mt-2 mt-md-0 mt-lg-0">  
                                <SelectFilter setFilterRegion={setFilterRegion} />                                          
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center mt-5 mb-5">
                            <div
                                className="col d-flex flex-wrap justify-content-center"
                            >
                                <Countries 
                                    countries={countries}
                                    setCountries={setCountries}
                                    filterRegion={filterRegion}
                                    search={search}
                                    returnInformation={returnInformation}
                                />
                            </div>
                        </div>                          
                    </FadeIn>
                    </div>                  
                </div>  
                                 
        </> 
    );

};

