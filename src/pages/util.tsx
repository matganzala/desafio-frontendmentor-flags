import React, { useState } from "react";
import Select from "react-select";
import '../styles/global.css';

export function SelectFilter({setFilterRegion}: any){    
    return(
        <>
            <div>
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
            </div>
        </>
    )
    
}

export function InputFilter({setSearch}: any){    
    return(
        <>
            <div>
                <input 
                    type="text" 
                    className="input-search" 
                    placeholder='Search for a country' 
                    onChange = {(e: any) => setSearch(e.target.value)}
                />
            </div>            
        </>
    )
}

export function DarkMode({SwitchMode}: any){
    const [theme, setTheme] = useState("");

}