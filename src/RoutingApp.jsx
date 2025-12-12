import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Skills from './pages/Skills';
import ProjectManage from "./pages/ProjectManage";
import Profile from "./pages/Profile";
import Message from './pages/Message';
import ProjectEdit from './pages/Page_editor';
import Blog from './pages/Blog';
import Category from './pages/Category';


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
            <Route path='/ProjectEdit' element={<ProjectEdit />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Category' element={<Category/>} />


        </Routes>
        </BrowserRouter>
        
        </>
     );
}
 
export default RoutingApp;
