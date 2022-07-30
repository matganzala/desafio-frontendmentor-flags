import { Input, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Card, NavItem } from "react-bootstrap";
import { Navbar } from "../components/navbar";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import '../styles/home.css'

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

    var gethomedata = JSON.parse(localStorage.getItem('homedata')!);
    var navigate = useNavigate();

    useEffect(() => {

        if(gethomedata == null){
            localStorage.setItem('newhomedata', JSON.stringify(gethomedata));
        }else{
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
        }
    }, [])

    return(     
        <>
            <Navbar/>
            <div className="container mt-3">
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
                                    <button className="card-item" value={index} key={index} onClick={() => {
                                        navigate("/details");
                                        localStorage.setItem('homedata', JSON.stringify(itemMap)); 
                                        // console.log(itemMap);
                                        }}>
                                        <div className="mt-3 mx-3" style={{ width: '15rem' }}>
                                            <div>
                                                <img src={itemMap?.flags.svg} className="mb-3 "/>
                                            </div>
                                            <div>
                                                <strong className="h1-class-home mt-3">{itemMap?.name.common}</strong>
                                                <p className="p-class-home"><strong>Population: </strong>{itemMap?.population}</p>
                                                <p className="p-class-home"><strong>Region: </strong>{itemMap?.region}</p>
                                                <p className="p-class-home"><strong>Capital: </strong>{itemMap?.capital}</p>
                                            </div>
                                        </div>
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
