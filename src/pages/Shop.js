import Header from './Header';
import Footer from './Footer';
import '../styles/shop.css';

const Shop = ({ getItems, items }) => {

  return (
    <div>
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
          <img src={element.image} alt=''></img>
        </div>
      )
    })}
  </div>
  )
}





export default Shop;