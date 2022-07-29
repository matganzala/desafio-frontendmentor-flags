import { Box, Input, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Card, NavItem } from "react-bootstrap";
import { Navbar } from "../components/navbar";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import '../styles/home.css';
import FadeIn from 'react-fade-in';
import InfiniteScroll from 'react-infinite-scroll-component';

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
    const myRef = useRef();
    //const [currentPage, setCurrentPage] = useState(1);

    //var gethomedata = JSON.parse(localStorage.getItem('homedata')!);
    var navigate = useNavigate();
    var getnew: any = null;

    useEffect(() => {
        if(getnew == null){
            var requestOptions: any = {
                method: 'GET',
                redirect: 'follow'
              };
              
            const API_URL: any = 'https://restcountries.com/v3.1/all';
            //const URL_CONFIGURED: any = `${API_URL}?per_page=10&page=${currentPage}&order=DESC`;
            fetch(API_URL, requestOptions)
              .then(response => response.json())
              .then(result => {
                setCountries(result);
              })
                .catch(error => console.log("Erro", error));
        }else{
            //console.log("Entrou")
            setCountries(getnew);
        } 
        
    }, [])//currentPage

    useEffect(() => {
        localStorage.setItem('newhomedata', JSON.stringify(countries));
        getnew = JSON.parse(localStorage.getItem('newhomedata')!);
        //console.log(getnew);
    },[countries])

    useEffect(() => {
        // const intersectionObserver = new IntersectionObserver(entries => {
        //   if (entries.some(entry => entry.isIntersecting)) {
        //     console.log('Sentinela appears!', currentPage + 1)
        //     setCurrentPage((currentValue) => currentValue + 1);
        //   }
        // })
        // intersectionObserver.observe(document.querySelector('#sentinela'));
        // return () => intersectionObserver.disconnect();


      }, []);

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
                                    <FadeIn>
                                        <button className="card-item" value={index} key={index} onClick={() => {
                                            navigate("/details");
                                            localStorage.setItem('homedata', JSON.stringify(itemMap));
                                            // console.log(itemMap);
                                        } }>
                                            <div className="mt-3 mx-3" style={{ width: '15rem', minHeight: '305px' }}>
                                                <div>
                                                    <img loading="lazy" src={itemMap?.flags.svg} className="mb-3 " style={{ height: '160px'}}/>
                                                </div>
                                                <div>
                                                    <strong className="h1-class-home mt-3">{itemMap?.name.common}</strong>
                                                    <p className="p-class-home"><strong>Population: </strong>{itemMap?.population}</p>
                                                    <p className="p-class-home"><strong>Region: </strong>{itemMap?.region}</p>
                                                    <p className="p-class-home"><strong>Capital: </strong>{itemMap?.capital}</p>
                                                </div>
                                            </div>
<<<<<<< HEAD
                                        </button>
                                    </FadeIn>
=======
                                            <div>
                                                <strong className="h1-class-home mt-3">{itemMap?.name.common}</strong>
                                                <p className="p-class-home"><strong>Population: </strong>{itemMap?.population}</p>
                                                <p className="p-class-home"><strong>Region: </strong>{itemMap?.region}</p>
                                                <p className="p-class-home"><strong>Capital: </strong>{itemMap?.capital}</p>
                                            </div>
                                        </div>
                                    </button>    
>>>>>>> 067c12d9888bc70e01f16c232b8e443c3a8577b0
                                )
                            })}
                            <li id="sentinela">

                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
