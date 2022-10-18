import React, { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import FadeIn from "react-fade-in";

export function Details({}: any) {
    var navigate = useNavigate();   
    console.log();
    return(        
        <>
            <div className="container">
                <FadeIn>
                    <h1>hello world, abriu modal</h1>
                    
                </FadeIn>
            </div>
        </>
    )
}
