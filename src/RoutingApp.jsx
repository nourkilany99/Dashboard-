import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Skills from './pages/Skills';
import ProjectManage from "./pages/ProjectManage";
import Profile from "./pages/Profile";
import Message from './pages/Message';


const RoutingApp = () => {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/ProjectManage' element={<ProjectManage />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Message' element={<Message />} />


        </Routes>
        </BrowserRouter>
        
        </>
     );
}
 
export default RoutingApp;
