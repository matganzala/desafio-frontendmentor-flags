import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";

export function Details() {
    var getDataCountries = JSON.parse(localStorage.getItem('dataCountries')!)
    return(        
        <>
            <div>
                <div className="container">
                    <FadeIn>
                        <h1>{getDataCountries.name}</h1>
                        <h1>{getDataCountries.population}</h1>
                        
                    </FadeIn>
                </div>
            </div>
        </>
    )
}
