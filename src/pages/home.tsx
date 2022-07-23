import { Input, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Button  } from "react-bootstrap";
import { Card } from "react-bootstrap";

import { Navbar } from "../components/navbar";
//import Select from 'react-select';

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

    //console.log(countries);
    
    countries.map((item, index: any) => {
        
    })
    return(     
        <>
            <Navbar/>
            <div className="container">
                <div className="content-homepage">
                    <div className="row ">
                        <div className="col-12 col-md-8 mt-3">
                            <Input variant='outline' placeholder='Outline' />
                        </div>
                        <div className="col-12 col-md-4 mt-3">
                            <Select>
                                {/*<option value="" key={index}>{item?.name.official}</option>*/}
                            </Select>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col d-flex flex-wrap justify-content-center">
                            {countries.map((item: any, index: any) => {
                                return(
                                    <>
                                    <button>
                                        <Card className="mt-3 mx-3" style={{ width: '15rem' }}>
                                            <Card.Img variant="top" src={item?.flags.svg} />
                                            <Card.Body>
                                                <Card.Title><strong>{item?.name.official}</strong></Card.Title>
                                                    <Card.Text>
                                                        <>
                                                            <p><strong>Population: </strong>{item?.population}</p>
                                                            <p><strong>Region: </strong>{item?.region}</p>
                                                            <p><strong>Capital: </strong>{item?.capital}</p>
                                                            
                                                        </>
                                                    </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </button>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}