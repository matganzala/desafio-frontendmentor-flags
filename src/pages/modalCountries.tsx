import { Input, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Card, NavItem } from "react-bootstrap";
import { Navbar } from "../components/navbar";
import Select from 'react-select';

export function ModalCountries() {

    var gethomedata = JSON.parse(localStorage.getItem('homedata')!);
    return(     
        <>
            <Navbar/>
            
        </>
    )
}
