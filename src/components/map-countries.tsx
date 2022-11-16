import React, { Fragment } from "react";
import { Link, matchPath, useNavigate } from "react-router-dom";
import '../styles/global.css';

type MapProps = 
{
    countries?: string | any,
    limite?: number,
    search?: any,
    filterRegion?: string,
    orderPopulation?: any
};

export function MapCountries(props: MapProps){ 
    Array.isArray(props.countries) ?
    props.countries.sort((a,b) => {
        if(a.population > b.population){
            return -1;
        } else{
            return true;
        }
    }) 
    : null
    var navigate = useNavigate();
    return(
        <Fragment>
            {
                
            //fixed error countries is not a function
            Array.isArray(props.countries) ?
            props.countries.filter((item: any) => 
                item?.name.common
                    .replace(/'/g, '')
                    .toLowerCase()
                    .includes(props.search
                    .toLowerCase()
                    .trim())                   
            )
            .filter((item: any) => {
                if(props.filterRegion == ""){
                    return item;
                }

                else if(item?.region == props.filterRegion){
                    return item;
                }
            })
            
            .map((item: any, index: any) => {                              
                const navigateDetails = () => {
                    navigate(`/details/${item?.cca3}`);
                };               
                return(
                    <>  
                        <div
                            className="card mx-4 mt-4" 
                            key={index} 
                            onClick={navigateDetails}                                                      
                        >
                            <div>
                                <img 
                                    loading="lazy" 
                                    src={item?.flags.svg} 
                                    className="flags-sizing" 
                                />
                            </div>
                            <div className="d-flex flex-column card-item">
                                <span 
                                    className="d-inline-block text-truncate h1-class-home mt-1 mb-1 ">
                                        {item?.name.common}
                                </span>
                                <span 
                                    className="p-class-home mt-1">
                                    <span 
                                        className="h2-class-home" >
                                        Population: {''}  
                                    </span>
                                        {item?.population.toLocaleString('pt-BR')}
                                </span>
                                <span 
                                    className="p-class-home mt-1">
                                    <span 
                                        className="h2-class-home">
                                        Region: {''} 
                                    </span>
                                        {item?.region}
                                </span>
                                <span 
                                    className="p-class-home mt-1">
                                    <span 
                                        className="h2-class-home">
                                        Capital: {''}  
                                    </span>
                                        {item?.capital}
                                </span>
                            </div>
                        </div>
                    </>
                )            }
            
            ).slice(0, props.limite)
            : null
            
        }           
        </Fragment>

    );

};