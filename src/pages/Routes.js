import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import App from "../App";
import Shop from "./Shop";
import Cart from './Cart';
import all from '../data/all'

const RouteSwitch = () => {
  const [items, setItems] = useState(all)
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const getItems = (e) => {
    if (e.target.textContent === 'All') {
      setItems(all)
    } else {
      const items = all.filter((item) => item.category === e.target.textContent.toLowerCase())
      setItems(items)
      console.log(items)
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/shop' element={<Shop items={items} getItems={getItems} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;