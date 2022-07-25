import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
//import { Button  } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Navbar } from "../components/navbar";
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export function Home() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const options = [
        { value: 'Africa', label: 'Africa'},
        { value: 'Americas', label: 'Americas' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Asia', label: 'Asia' },
        { value: 'Oceania', label: 'Oceania' },
        { value: '', label: 'No filter'},
    ]
    const [filterRegion, setFilterRegion] = useState("");
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");

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
                <div className="content-homepage">
                    <div className="row justify-content-around">
                        <div className="col-6 col-md-5 mt-3">
                            <Input type="text" 
                                className="input-search" 
                                placeholder='Search for a country' 
                                onChange = {(e: any) => setSearch(e.target.value)}
                                />
                        </div>
                        <div className="col-6  col-md-3 mt-3">
                            <Select options={options} onChange={(e : any) => setFilterRegion(e.value)}/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col d-flex flex-wrap justify-content-center">
                           {countries.filter((item: any) => 
                           item?.name.official.toLowerCase().includes(search.toLowerCase())
                           )
                           .filter((item: any) => {
                                if(filterRegion == ""){

                                    return item;

                                }else if (item?.region == filterRegion){
                                    return item;
                                }
                           }
                           ).map((item: any, index: any) => {
                                return(
                                    <button onClick={handleOpen} key={index}>
                                        <Card className="mt-3 mx-3" style={{ minHeight: '20rem', maxHeight: '20rem', width: '18rem' }}>
                                            <Card.Img variant="top" src={item?.flags.svg} />
                                            <Card.Body>
                                                <Card.Title><strong>{item?.name.official}</strong></Card.Title>
                                                    <p><strong>Population: </strong>{item?.population}</p>
                                                    <p><strong>Region: </strong>{item?.region}</p>
                                                    <p><strong>Capital: </strong>{item?.capital}</p>
                                            </Card.Body>
                                        </Card>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
