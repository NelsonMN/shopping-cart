import { Link } from 'react-router-dom';
import '../styles/cart-page.css';
import creditLogo from '../images/credit-card-logos.png';

const Cart = ({ numItems, setNumItems, cart, setCart, total, setTotal }) => {

  if (cart.length > 0) {
    return <NonEmptyCart numItems={numItems} setNumItems={setNumItems} total={total} setTotal={setTotal} cart={cart} setCart={setCart}/>
  } else {
    return <EmptyCart />
  }
};

const EmptyCart = () => {
  return (
    <div className='empty-cart-page'>
      <div className='empty-box'>
        <h2 className='light'>Your cart is empty.</h2>
        <h2 className='light'>Fill it up with for your next adventure!</h2>
        <Link to='/shop'><button>Shop</button></Link>
      </div>
    </div>
  )
}

const NonEmptyCart = ({ numItems, setNumItems, cart, setCart, total, setTotal }) => {
  return (
    <div className='nonempty-cart-page'>
      <h1>My Cart ({numItems} items)</h1>
      <div className='cart-items'>
        <CartHolder cart={cart} setCart={setCart} setNumItems={setNumItems} total={total} setTotal={setTotal} />
      </div>
    </div>
  )
}

const CartHolder = ({ cart, setCart, setNumItems, total, setTotal }) => {
  const incrementItem = (element) => {
    element.quantity += 1;
    const cartClone = [...cart];
    setCart(cartClone)
    setNumItems(n => n + 1)
    setTotal(t => t + element.item.price)
  }

  const decrementItem = (element) => {
    if (element.quantity > 1) {
      element.quantity -= 1;
      const cartClone = [...cart];
      setCart(cartClone)
      setNumItems(n => n - 1)
      setTotal(t => t - element.item.price)
    } else if (element.quantity === 1) {
      removeItem(element)
    }
  }

  const removeItem = (element) => {
    const cartClone = [...cart];
    setNumItems(n => n - element.quantity)
    setTotal(t => t - (element.item.price * element.quantity))
    const newCart = cartClone.filter(item => item.id !== element.id)
    setCart(newCart)

  }

  return (
    <div className='cart-item-holder'>
      {cart.map(element => { 
        return (
          <div className='cart-item' key={element.id}>
            <Link className='cart-link' to={`/shop/${element.id}`}><img className='cart-img' src={element.item.image} alt={element.item.name}></img></Link>
            <div className='cart-item-details'>
              <h3>{element.item.name}</h3>
              <h3>${element.item.price} CAD</h3>
              <button className='remove-item' onClick={() => removeItem(element)}>Remove Item</button>
            </div>
            <div className="counter">
              <button onClick={() => decrementItem(element)}>-</button>
              <div className="count">{element.quantity}</div>
              <button onClick={() => incrementItem(element)}>+</button>
            </div>
          </div>
          )
        })}
      <Total total={total} />
      <Link to='../'><button className='check-out'>Check Out</button></Link>
      <img className='credit-logo' src={creditLogo} alt='credit-card-logos'></img>
    </div>
  ) 
}

const Total = ({ total }) => {
  return (
    <div className='total'>
      <h1>Total</h1>
      <div className='sub-total'>
        <h2 className='light'>Sub-total</h2>
        <h2 className='light'>${total}</h2>
      </div>
      <div className='sub-total'>
        <h2 className='light'>Shipping</h2>
        <h2 className='light'>FREE</h2>
      </div>
      <div className='sub-total'>
        <h2 className='total-amount'>Total (HST/GST incl.)</h2>
        <h2 className='total-amount'>${total} CAD</h2>
      </div>
      
    </div>
  )
}

export default Cart;