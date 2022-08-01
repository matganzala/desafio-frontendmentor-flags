import { Box, Input, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Card, NavItem } from "react-bootstrap";
import { Navbar } from "../components/navbar";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import '../styles/home.css';
import FadeIn from 'react-fade-in';

export function Home() {

    const options: any = [
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
    const [scrolls, setScroll] = useState([1]);
    const [infinite, setInfinite] = useState(true);
    
    var navigate = useNavigate();
    var getnew: any = null;
    var regions: any = document.querySelectorAll('Americas');
    var i = 0;


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
            setCountries(getnew);
        } 
        
    }, [])

    useEffect(() => {
        localStorage.setItem('newhomedata', JSON.stringify(countries));
        getnew = JSON.parse(localStorage.getItem('newhomedata')!);
        //console.log(getnew);
    },[countries])

    //scrollInfinito

    {/*useEffect(() => {//efeito de scroll infinito
        const infiniteScroll = () => {
            if(infinite) {
                var wait = false;
                const scroll: any = window.scrollY;
                const heigth: any = document.body.offsetHeight - window.innerHeight;
                //console.log(event);//consologo no evento de scroll
                if(scroll > heigth * .10 && !wait){
                    setScroll((scrolls) => [...scrolls, scrolls.length + 1])//desestruturando as páginas
                    console.log(true);
                    wait = true;
                        setTimeout(() => {
                            wait = false;
                        }, 500);
                }
            }
        }
            window.addEventListener('wheel', infiniteScroll)
            window.addEventListener('scroll', infiniteScroll)
        return () => {
            window.removeEventListener('wheel', infiniteScroll)
            window.removeEventListener('scroll', infiniteScroll)

        };
        
    },[])*/}
    
      

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
                            {scrolls.map((scroll: any) => countries.filter((item: any) => 
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
                                            <button className="card-item" value={index} onClick={() => {
                                                
                                                navigate("/details");
                                                localStorage.setItem('homedata', JSON.stringify(itemMap));

                                                // console.log(itemMap);
                                            } }>
                                                {
                                                    
                                                    regions.forEach(function(item: any){
                                                        console.log(item);
                                                    })
                                                }

                                                <div>
                                                    <div className="mt-3 mx-3" style={{ width: '15rem', minHeight: '305px' }}>
                                                        <div>
                                                            <img loading="lazy" src={itemMap?.flags.svg} className="mb-3 " style={{ height: '160px' }} />
                                                        </div>
                                                        <div>
                                                            <strong className="h1-class-home mt-3">{itemMap?.name.common}</strong>
                                                            <p className="p-class-home"><strong>Population: </strong>{itemMap?.population}</p>
                                                            <p className="p-class-home"><strong>Region: </strong>{itemMap?.region}</p>
                                                            <p className="p-class-home"><strong>Capital: </strong>{itemMap?.capital}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </FadeIn>
                                    )
                                }))}                                             
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )

    

}

