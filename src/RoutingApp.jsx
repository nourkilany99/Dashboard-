import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Skills from './pages/Skills';

const RoutingApp = () => {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Skills' element={<Skills />} />

        </Routes>
        </BrowserRouter>
        
        </>
     );
}
 
export default RoutingApp;
