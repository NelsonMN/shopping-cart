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
    <div className='cart-page'>
      <h1>I am empty!</h1>
      <h1>${total} CAD</h1>
    </div>
  )
}

const NonEmptyCart = ({ cart, total }) => {
  return (
    <div className='cart-page'>
      <h1>I am not empty!</h1>
      {cart.map(element => { 
        return <h1>{element.name}</h1>
      })}
      <h1>${total} CAD</h1>
    </div>
  )
}

export default Cart;
