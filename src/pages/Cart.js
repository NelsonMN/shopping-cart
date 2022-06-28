import { Link } from 'react-router-dom';
import '../styles/cart-page.css'

const Cart = ({ cart, setCart, total, setTotal }) => {
  
  const incrementCart = () => {

  }

  const decrementCart = () => {

  }

  if (cart.length > 0) {
    return <NonEmptyCart total={total} cart={cart}/>
  } else {
    return <EmptyCart total={total} cart={cart}/>
  }
};

const EmptyCart = ({ cart, total }) => {
  return (
    <div className='empty-cart-page'>
      <div className='empty-box'>
        <h2>Your cart is empty</h2>
        <h2>Fill it up with for your next adventure!</h2>
        <Link to='/shop'><button>Shop</button></Link>
      </div>
    </div>
  )
}

const NonEmptyCart = ({ cart, total }) => {
  return (
    <div className='nonempty-cart-page'>
      <h1>I am not empty!</h1>
      {cart.map(element => { 
        return <h1>{element.name}</h1>
      })}
      <h1>${total} CAD</h1>
    </div>
  )
}

export default Cart;
