import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Details } from "./pages/detailscountries";
import { Home } from "./pages/home";


export function AppRouter() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/details" element={<Details/>}/>
                </Routes>
            </Router>
        </>
    )
}