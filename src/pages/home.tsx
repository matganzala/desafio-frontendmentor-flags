import React, { useEffect, useState } from "react";
import '../styles/global.css';
import FadeIn from 'react-fade-in';
import { Countries } from "../components/countries";
import { Navbar } from "../components/navbar";
import { InputFilter, SelectFilter } from "./util";

export function Home() { 
    const [search, setSearch] = useState("");
    const [filterRegion, setFilterRegion] = useState("");

    console.log(search, filterRegion)
    return(
        <>
            <div>
                <Navbar/>
                <div className="content-countries">
                    <div className="container">
                        <FadeIn>
                            <div className="row d-flex justify-content-center mt-5 mb-5">
                                <div className="col-12 col-md-6">
                                    <InputFilter setSearch={setSearch} />  
                                </div>
                                <div className="col-12 col-md-4 mt-2 mt-md-0 mt-lg-0">  
                                    <SelectFilter setFilterRegion={setFilterRegion} />                                          
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center mt-5 mb-5">
                                <div className="col d-flex flex-wrap justify-content-center ">
                                    <Countries 
                                        filterRegion={filterRegion}
                                        search={search} 
                                    />
                                </div>
                            </div>                          
                        </FadeIn>
                    </div>                  
                </div>  
            </div>
                                 
        </> 
    );

};

