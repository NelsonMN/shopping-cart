import { Link } from 'react-router-dom';
import '../styles/shop.css';

const Shop = ({ getItems, items }) => {

  const toggleActive = (e) => {
    const buttons = Array.from(e.target.closest('nav').children)
    buttons.forEach( button => {
      if (button.classList.contains('active')) {
        button.classList.remove('active')
      }
      e.target.classList.add('active')
    })
  }

  return (
    <div className='shop-content'>
      <nav className='nav'>
        <button className='category active' onClick={(e) => {
          getItems(e)
          toggleActive(e)}}>
          All
        </button>
        <button className='category' onClick={(e) => {
          getItems(e)
          toggleActive(e)}}>
          Tents
        </button>
        <button className='category' onClick={(e) => {
          getItems(e)
          toggleActive(e)}}>
          Sleeping
        </button>
        <button className='category' onClick={(e) => {
          getItems(e)
          toggleActive(e)}}>
          Furniture
        </button>
      </nav>
      <Display items={items} />
    </div>
  );
};


const Display = ({ items }) => {
  
  return (
    <div className='catalog'>
      {items.map((element) => {
        return (
          <div className='item' key={element.id}>
            <div className='item-image' >
              <Link to={`/shop/${element.id}`}><img className='img' src={element.image} alt=''></img></Link>
            </div>
            <div className='item-info'>
              <h3>{element.name}</h3>
              <h3>${element.price} CAD</h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}





export default Shop;