import React, { useState } from "react";
import Select from "react-select";
import '../styles/global.css';

export function SelectFilter({setFilterRegion}: any){
    return(
        <>
            <select 
                placeholder='Filter by region'
                className="select-search"
                onChange={(e: any) => setFilterRegion(e.target.value)}                
            > 
                <option value={''} label={'Filter by region'}>Filter by region</option>
                <option value={'Africa'} label={'Africa'}>Africa</option>
                <option value={'Americas'} label={'Americas'}>Americas</option>
                <option value={'Europe'} label={'Europe'}>Europe</option>
                <option value={'Asia'} label={'Asia'}>Asia</option>
                <option value={'Oceania'} label={'Oceania'}>Oceania</option>
            </select> 
        </>
    )
    
}

export function InputFilter({setSearch}: any){
    
    return(
        <>
            <input 
                type="text" 
                className="input-search" 
                placeholder='Search for a country' 
                onChange = {(e: any) => setSearch(e.target.value)}
            />
        </>
    )


}