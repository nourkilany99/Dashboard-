import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';

const RoutingApp = () => {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />

        </Routes>
        </BrowserRouter>
        
        </>
     );
}
 
export default RoutingApp;
