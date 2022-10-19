import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";

export function Details() {
    var getDataCountries = JSON.parse(localStorage.getItem('countries')!);
    console.log(getDataCountries?.name.common);
    return(        
        
        <>
            <div>
                <div className="container">
                    <FadeIn>
                        <h1>{getDataCountries?.name.common}</h1>
                        <p>{getDataCountries?.name.common}</p>
                    </FadeIn>
                </div>
            </div>
        </>
    )
}
