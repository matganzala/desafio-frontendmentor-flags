import { Box, Input, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Card, NavItem } from "react-bootstrap";
import { Navbar } from "../components/navbar";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import '../styles/home.css';
import FadeIn from 'react-fade-in';
import { height } from "@mui/system";
import { Countries } from "../components/countries";

export function Home() {    
   

    return( 
        <>  
            <div className="content-homepage">
                <Navbar/> 
                <Countries
                />
            </div>
        </>
        
    )

    

}

