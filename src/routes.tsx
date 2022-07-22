import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";


export function AppRouter() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Router>
        </>
    )
}