import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import App from "../App";
import Shop from "./Shop";
import Cart from './Cart';
import ItemDetail from './ItemDetail';
import all from '../data/all';
import Header from "./Header";
import Footer from "./Footer";

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
    }
  };

  return (
      <BrowserRouter>
        <Header cart={cart.length}/>
        <Routes>
          <Route path='/' element={<App total={total}/>} />
          <Route path='/shop' element={<Shop items={items} getItems={getItems} />} />
          <Route path='/shop/:id' element={<ItemDetail setCart={setCart} setTotal={setTotal} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} total={total} setTotal={setTotal} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
};

export default RouteSwitch;