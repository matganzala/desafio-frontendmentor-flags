import React, { useEffect, useState } from "react";
import '../styles/global.css';
import { getCountries } from "../API/apicountries";
import { ListCountries } from "./list-countries";

export function Countries({filterRegion, search, countries, setCountries, setIdParams}: any) {  
    const [limite, setLimite] = useState(20);
    const [scroll, setScroll] = useState(0);
    const [heigth, setHeigth] = useState(0); 

    //scrollInfinito
    useEffect(() => {
        const infiniteScroll = () => {
            var heigthAuxiliar: any = document.body.offsetHeight;
            var wait = false;
            setScroll(window.scrollY);
            setHeigth(heigthAuxiliar - window.innerHeight);
            var infinite = true;
            if(limite == countries.length){
                infinite = false;
            }
            if(infinite){
                if(scroll >= heigth * .80 && !wait){
                    var limiteAuxiliar: any = 20;
                    limiteAuxiliar = limiteAuxiliar + 20;
                    //console.log(limiteAuxiliar);
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
    

    async function fetchCountries(){
        setCountries(await getCountries().then());
    }

    useEffect(() => {
        fetchCountries();        
    }, []);

    return(
        <>  
            <ListCountries
                setIdParams={setIdParams}
                countries={countries}
                limite={limite}
                filterRegion={filterRegion}
                search={search}      
            />
        </>
    )

}
