import { Input, useDisclosure } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
//import { Button  } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Navbar } from "../components/navbar";
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function Home() {
    

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
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = useState('full');

    const handleSizeClick = (newSize: any) => {
        setSize(newSize)
        onOpen()
    }

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
                                            <>
                                                {/* <Modal isOpen={isOpen} size={size} onClose={onClose}>
                                                    <ModalOverlay />
                                                    <ModalContent>
                                                        <ModalHeader>{item?.name.common}</ModalHeader>
                                                        <ModalCloseButton />
                                                        <ModalBody>
                                                            2
                                                        </ModalBody>

                                                        <ModalFooter>
                                                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                                                Close
                                                            </Button>
                                                            <Button variant='ghost'>Secondary Action</Button>
                                                        </ModalFooter>
                                                    </ModalContent>
                                                </Modal> */}
                                                <button onClick={onOpen} key={index}>
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
