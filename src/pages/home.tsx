import { Box, Input, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Card, NavItem } from "react-bootstrap";
import { Navbar } from "../components/navbar";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import '../styles/home.css';
import FadeIn from 'react-fade-in';
import { height } from "@mui/system";
import { Countries } from "../components/countries";

export function Home() {
    const [countries, setCountries] = useState({});
    const [countriesInformation, setCountriesInformation] = useState({});

    

    

    function objectCountries(
        countryItem: any,
        populationItem: any,
        regionItem: any,
        capitalItem: any
    ){
    const newObjCountries = {
        ...countries,
        country: countryItem,
        population: populationItem,
        region: regionItem,
        capital: capitalItem

    }

    setCountries(newObjCountries);
    }
    
    function objectInformation(
            flagItem: any, 
            nameItem: any, 
            nativeItem: any, 
            populationItem: any, 
            regionItem: any, 
            subregionItem: any, 
            capitalItem: any,
            levelDomainItem: any,
            currenciesItem: any,
            languageItem: any,
            bordersItem: any)
        {
    const newObjCountriesInformation = {
        ...countriesInformation,
        flag: flagItem,
        name: nameItem,
        nativeName: nativeItem,
        population: populationItem,
        region: regionItem,
        subregion: subregionItem,
        capital: capitalItem,
        leveldomain: levelDomainItem,
        currencies: currenciesItem,
        language: languageItem,
        borders: bordersItem,
    }
       
        setCountriesInformation(newObjCountriesInformation);
        console.log(countriesInformation);
    };

    return( 
        <>  
            <div className="content-homepage">
                <Navbar/> 
                <Countries
                    objectCountries={objectCountries} 
                    objectInformation={objectInformation}
                    setContriesForPageDetails={setContriesForPageDetails}
                />
            </div>
        </>
        
    )

    

}

