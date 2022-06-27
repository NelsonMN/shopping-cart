import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import '../styles/itemDetail.css'

import all from "../data/all";

const ItemDetail = ({ cart, setCart }) => {
  
  let { id } = useParams();
  
  const [item, setItem] = useState([])
  const [count, setCount] = useState(0)

  const addToCart = () => {
    const previewItem = all.filter((item) => item.id === id)
    
    for (let i = 0; i < count; i++) {
      setCart(c => c.concat(previewItem))
    }

  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(c => c - 1)
    }
  }

  const handleIncrement = () => {
    setCount(c => c + 1)
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
            <div className="count">{count}</div>
            <button onClick={handleIncrement}>+</button>
          </div>

          <button onClick={addToCart}>Add to cart</button>
        </div> 
        </div>
      </div>
    </div>
  )
}

export default ItemDetail