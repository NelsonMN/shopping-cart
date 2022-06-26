import Header from './Header';
import Footer from './Footer';
import '../styles/shop.css';

const Shop = ({ getItems, items }) => {

  return (
    <div className='body'>
      <Header />
      <nav className='nav'>
        <button onClick={getItems}>All</button>
        <button onClick={getItems}>Tents</button>
        <button onClick={getItems}>Sleeping</button>
        <button onClick={getItems}>Furniture</button>
      </nav>
      <Display items={items} />
      <Footer />
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
            <img src={element.image} alt=''></img>
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