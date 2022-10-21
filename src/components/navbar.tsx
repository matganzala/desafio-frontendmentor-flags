import React from "react";
import { } from "react-bootstrap";
import "../styles/navbar.css";

export function Navbar() {
    return(
        <>
            <div className="navbar-content d-flex justify-content-around align-items-center">
                <span className="h1-class-home">Where in the world?</span> 
                <button className="dark-mode">DARK MODE</button>    
            </div>
            
        </>
    )

}