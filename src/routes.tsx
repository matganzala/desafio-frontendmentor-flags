import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Details } from "./pages/details-countries";
import { Home } from "./pages/home";

export function AppRouter() { 
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/">
                        <Route path="" element={<Home/>}/>
                        <Route path=":countries" element={<Home/>}/>
                        <Route path="/details/:details" element={<Details/>}/>
                    </Route>
                </Routes>
            </Router>            
        </>
    )
}
