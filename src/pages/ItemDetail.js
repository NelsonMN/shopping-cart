import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import '../styles/itemDetail.css'

import all from "../data/all";

const ItemDetail = ({ cart, setCart, setTotal, setNumItems }) => {
  
  let { id } = useParams();
  
  const [item, setItem] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const cartDiv = document.querySelector('.cart')
    const id = item.id
    
    
    if (quantity > 0) {
      cartDiv.classList.remove('wiggle')
      void cartDiv.offsetWidth;
      cartDiv.classList.add('wiggle')
      setCart(c => c.concat({item, quantity, id}))
      setTotal(t => t + (item.price * quantity))
      setNumItems(n => n + quantity)
    }

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        const cartClone = [...cart]
        cartClone[i].quantity += quantity
        setCart(cartClone)
      }
    }
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(c => c - 1)
    }
  }

  const handleIncrement = () => {
    setQuantity(c => c + 1)
  }
  
  useEffect(() => {
    const previewItem = all.filter((item) => item.id === id)
    setItem(previewItem[0])
  }, [id])


  return (
    <div className="item-page">
      <div className="item-nav">
        <Link to='/shop'><button>Go Back</button></Link>
      </div>
      <div className="item-showcase">
        <div className="item-holder">
        <img className="preview-image" src={item.image} alt={item.name}></img>
        <div className="preview-details">
          <h1>{item.name}</h1>
          <h2>${item.price} CAD</h2>
          
          <div className="counter">
            <button onClick={handleDecrement}>-</button>
            <div className="count">{quantity}</div>
            <button onClick={handleIncrement}>+</button>
          </div>

          <button className="add" onClick={addToCart}>Add to cart</button>
        </div> 
        </div>
      </div>
    </div>
  )
}

export default ItemDetail