import React, { createContext, useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import '../styles/flags.css';
import { Details } from "./details-countries";


export function Countries({objectInformation} : any){
    const options: any = [
        { value: 'Africa', label: 'Africa'},
        { value: 'Americas', label: 'Americas' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Asia', label: 'Asia' },
        { value: 'Oceania', label: 'Oceania' },
    ]
    const [filterRegion, setFilterRegion] = useState("");
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [countriesInformation, setCountriesInformation] = useState({});    
    const [limite, setLimite] = useState(20);
    const [scroll, setScroll] = useState(0);
    const [heigth, setHeigth] = useState(0); 
    
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
        
    }, []);    
    

    useEffect(() => {
        localStorage.setItem('newhomedata', JSON.stringify(countries));
        getnew = JSON.parse(localStorage.getItem('newhomedata')!);
        //console.log(getnew);
    },[countries]);

    //scrollInfinito
    useEffect(() => {//efeito de scroll infinito
        const infiniteScroll = () => {
            var heigthAuxiliar: any = document.body.offsetHeight;
            var wait = false;
            setScroll(window.scrollY);
            setHeigth(heigthAuxiliar - window.innerHeight);
            //console.log(event);//consologo no evento de scroll
            var infinite = true;
            if(limite == countries.length){
                infinite = false;
            }
            if(infinite){
                if(scroll >= heigth * .80 && !wait){
                    //setScroll((scrolls) => [...scrolls, scrolls.length + 1])//desestruturando as páginas
                    var limiteAuxiliar: any = 20;
                    limiteAuxiliar = limiteAuxiliar + 20;
                    console.log(limiteAuxiliar);
                    setLimite(limite + 20);
                    console.log(true);
                    
                    wait = true;
                        setTimeout(() => {
                            wait = false;
                        }, 500);
                }
            }
        }
        
            window.addEventListener('wheel', infiniteScroll);
            window.addEventListener('scroll', infiniteScroll);
        return () => {
            window.removeEventListener('wheel', infiniteScroll);
            window.removeEventListener('scroll', infiniteScroll);
    
        };
        
        
    }, [scroll, heigth]); 
    return(
        <>
            <div className="content-countries">
                <div className="container">
                    <div className="row d-flex justify-content-center mt-5 mb-5">
                        <div className="col-12 col-md-4">
                            <input 
                                type="text" 
                                className="input-search" 
                                placeholder='Search for a country' 
                                onChange = {(e: any) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="col-12 col-md-4 mt-2 mt-md-0 mt-lg-0">                            
                            <Select 
                                placeholder='Filter by region'
                                onChange={(e : any) => setFilterRegion(e.value)}
                                options={options}
                            />                       
                        </div>
                    </div>                
                    <div>
                        <div className="col d-flex flex-wrap justify-content-center">  
                            {countries.filter((item: any) => 
                            item?.name.official
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            )
                            .filter((item: any) => {
                                    if(filterRegion == ""){
                                        return item;

                                    }else if (item?.region == filterRegion){
                                        return item;
                                    }
                            }
                            ).map((itemMap: any) => {
                                function HandleBringCoutries(){
                                    var objectCountries: any = 
                                    {                
                                                         
                                        id: itemMap?.cca3,                                        
                                        flag: itemMap?.flags.svg,
                                        name: itemMap?.name.common,
                                        nativename: itemMap?.name.nativeName,
                                        population: itemMap?.population.toLocaleString('pt-BR'),
                                        region: itemMap?.region,
                                        subregion: itemMap?.subregion,
                                        capital: itemMap?.capital,
                                        currencies: itemMap?.currencies,
                                        language: itemMap?.languages,
                                        borders: itemMap?.borders,
                                    }
                                    
                                    console.log(objectCountries);
                                } 
                                    return(
                                        <FadeIn>
                                            <div 
                                                className="card-item mx-4 mb-5 " 
                                                onClick={() => {                                                
                                                //navigate("/details");
                                                HandleBringCoutries();
                                                //localStorage.setItem('homedata', JSON.stringify(itemMap));                                                
                                            } }>
                                                { 
                                                    regions.forEach(function(item: any){
                                                        return console.log(itemMap.population);
                                                    })
                                                }
                                                <div className="card">
                                                    <div className="div-img">
                                                        <img 
                                                            loading="lazy" 
                                                            src={itemMap?.flags.svg} 
                                                            className="img-size" 
                                                        />
                                                    </div>
                                                    <div className="d-flex flex-column card-item p-4">
                                                        <span 
                                                            className="h1-class-home mt-1 mb-1">
                                                                {itemMap?.name.common}
                                                        </span>
                                                        <span 
                                                            className="p-class-home mt-1">
                                                            <span 
                                                                className="h2-class-home" >
                                                                Population: {''}  
                                                            </span>
                                                                    {itemMap?.population.toLocaleString('pt-BR')}
                                                        </span>
                                                        <span 
                                                            className="p-class-home mt-1">
                                                            <span 
                                                                className="h2-class-home">
                                                                Region: {''} 
                                                            </span>
                                                                {itemMap?.region}
                                                        </span>
                                                        <span 
                                                            className="p-class-home mt-1">
                                                            <span 
                                                                className="h2-class-home">
                                                                    Capital: {''}  
                                                            </span>
                                                                {itemMap?.capital}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    )
                                }).slice(0, limite).sort()};                                         
                        </div>
                    </div>
                </div>
            </div>


        </> 
    )
}