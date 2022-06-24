import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import App from "../App";
import Shop from "./Shop";
import Cart from './Cart';
import Home from "./Home";

const RouteSwitch = () => {
  const [category, setCategory] = useState('');
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;