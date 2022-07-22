import { Input, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {} from "react-bootstrap";
import { Navbar } from "../components/navbar";

export function Home() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        var requestOptions: any = {
            method: 'GET',
            redirect: 'follow'
          };

        fetch('https://restcountries.com/v3.1/all', requestOptions)
          .then(response => response.json())
          .then(result => {
            setCountries(result);
          })
            .catch(error => console.log("Erro", error));

    }, [])

    
    return(     
        <>
            <Navbar/>
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <Input variant='outline' placeholder='Outline' />
                    </div>
                    <div className="col">
                        <Select>
                            {countries.map((country: any, index: any) => {
                                return(
                                    <><option value="" key={index}>{country?.name.official}</option></>
                                    )})}
                        </Select>
                    </div>
                </div>
                <div className="row">

                </div>
            </div>
        </>
    )
}