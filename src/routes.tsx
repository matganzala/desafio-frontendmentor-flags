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
                        <Route path=":id" element={<Home />}/>
                        <Route path="" element={<Home />}/>
                    </Route>
                    <Route path="/details/:countries" element={<Details/>}/>
                </Routes>
            </Router>
        </>
    )
};