import Header from './Header';
import Footer from './Footer';
import '../styles/shop.css';
import React, { useState, useEffect } from 'react';

const Shop = () => {

  return (
    <div>
      <Header />
      <nav className='nav'>
        <button>Tents</button>
        <button>Sleeping</button>
        <button>Furniture</button>
      </nav>
      <Footer />
    </div>
  );
};

export default Shop;
