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
import { Card, NavItem } from "react-bootstrap";
import { Navbar } from "../components/navbar";
import Select from 'react-select';
import { ModeFanOff } from "@mui/icons-material";

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

    const Overlay = () => (
        <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )
    
    const [overlay, setOverlay] = useState(<Overlay/>)
    var gethomedata = JSON.parse(localStorage.getItem('homedata')!);

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
                        <div className="col-6 col-md-5 mt-3">
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
                        ).map((itemMap: any, index: any) => {
                                return(
                                    <button value={index} key={index} onClick={() => {
                                        setOverlay(<Overlay/>); 
                                        onOpen(); 
                                        localStorage.setItem('homedata', JSON.stringify(itemMap)); 
                                        // console.log(itemMap);
                                        }}>
                                        <Card className="mt-3 mx-3" style={{ width: '18rem' }}>
                                            <Card.Img variant="top"src={itemMap?.flags.svg} />
                                            <Card.Body>
                                                <Card.Title><strong>{itemMap?.name.official}</strong></Card.Title>
                                                <p><strong>Population: </strong>{itemMap?.population}</p>
                                                <p><strong>Region: </strong>{itemMap?.region}</p>
                                                <p><strong>Capital: </strong>{itemMap?.capital}</p>
                                            </Card.Body>
                                        </Card>
                                    </button>    
                                )
                            })}
                                <Modal isCentered isOpen={isOpen} onClose={onClose} size={size}> 
                                 
                                <Navbar/>                           
                                    <ModalContent className="justify-content-center">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col">
                                                    <button onClick={onClose}>Back</button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <img src={gethomedata?.flags.svg} style={{}} />
                                                </div>
                                                <div className="col">
                                                    <div className="row">
                                                        <h1>{gethomedata?.name.official}</h1>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <p><strong>Native Name: </strong>{gethomedata?.name.common}</p>
                                                            <p><strong>Population: </strong>{gethomedata?.population}</p>
                                                            <p><strong>Region: </strong>{gethomedata?.region}</p>
                                                            <p><strong>Sub Region: </strong>{gethomedata?.subregion}</p>
                                                            <p><strong>Capital: </strong>{gethomedata?.capital}</p>
                                                        </div>
                                                        <div className="col">
                                                            <p><strong>Top Level Domain: </strong>{gethomedata?.tld}.</p>
                                                            
                                                            <p><strong>Currencies: </strong>
                                                                {Object.values(gethomedata.currencies).map((coin: any) => {
                                                                    return coin.name + ' - ' + coin.symbol;
                                                                })}  
                                                            </p>
                                                            <p><strong>Languages: </strong>
                                                                {Object.values(gethomedata.languages).map((language: any) => {
                                                                    return language;
                                                                })}
                                                                
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <p><strong>Border Countries: </strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ModalContent>
                                </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
