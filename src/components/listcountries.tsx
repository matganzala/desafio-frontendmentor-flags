import React, { Fragment, useEffect, useState } from "react";
import '../styles/global.css';

export function ListCountries({countries, limite, search, filterRegion}: any){
    //console.log(countries);
    return(
        <Fragment>
            {
            //fixed error countries is not a function
            Array.isArray(countries) ?
            countries.filter((item: any) => 
                item?.name.common
                    .replace(/'/g, '')
                    .toLowerCase()
                    .includes(search.toLowerCase())
            )
            .filter((item: any) => {
                if(filterRegion == ""){
                    return item;

                }
                else if(item?.region == filterRegion){
                    return item;
                }
            })
            .map((item: any, index: any) => {
                return(
                    <>  
                        <div className="card mx-4 mt-4" key={index}>
                            <div>
                                <img 
                                    loading="lazy" 
                                    src={item?.flags.svg} 
                                    className="flags-sizing" 
                                />
                            </div>
                            <div className="d-flex flex-column card-item">
                                <span 
                                    className="h1-class-home mt-1 mb-1">
                                        {
                                            
                                            item?.name.common
                                            .replace(/,/g, '')
                                            .slice(0, [0, 1])
                                            
                                        }
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

                );   

            }).slice(0, limite).sort()
            : null
        };            
        </Fragment>

    );
    


};