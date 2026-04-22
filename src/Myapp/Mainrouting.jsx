import React from 'react'
import Home from "./Home";
import Product from './Product';
import Contact from '../Componant/Contact';
import { Route, Router, Routes } from 'react-router-dom';
import Useeffecthook from '../Assingment_Task/Useeffecthook';
import Navbar from './Navbar';




function Mainrouting() {
    return (
        <Routes>
            <Route path='Navbar' element={<Navbar/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="useeffecthook" element={<Useeffecthook/>}/> */}


        </Routes>

    )
}

export default Mainrouting;