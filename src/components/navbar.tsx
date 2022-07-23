import React from "react";
import { Button } from "react-bootstrap";
import "../styles/navbar.css";

export function Navbar() {
    return(
        <>
            <div className="navbar-content d-flex">
                <div className="col-6 col-md-6 align-self-center text-center">
                    <p>Where in the world?</p> 
                </div>
                <div className="col-6 col-md-6 align-self-center text-center">
                    <input className="btn-dark-mode" type="button" value="Dark Mode" />
                </div>
            </div>
            
        </>
    )

}