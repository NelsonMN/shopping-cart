import '../styles/home.css'
import homeBackground from '../images/home-background.jpg'
import { Link } from "react-router-dom";
import furniture from '../data/furniture'
import sleeping from '../data/sleeping'
import tents from '../data/tents'

const Home = () => {
  return (
    <div className="home">
      <div className="section1">
        <div className="hero-text">
          <h1>Rediscover the joy of camping </h1>
          <Link  to='/shop'><button className="shop-button">Shop Now</button> </Link>
        </div>
        <img src={homeBackground} alt="hero-img"></img>
      </div>
      <div className="section2">
        <h1>Featured Items</h1>
        <div className="featured-items">
          <div className="item">
            <Link to='/shop/furniture1'>
              <img className='item-image' src={furniture[0].image} alt={furniture[0].name}></img>
              <div className='item-info'>
                <h3>{furniture[0].name}</h3>
                <h3>${furniture[0].price} CAD</h3>
              </div>
            </Link>
          </div>
          <div className="item">
            <Link to='/shop/sleeping2'>
              <img className='item-image' src={sleeping[1].image} alt={sleeping[1].name}></img>
              <div className='item-info'>
                <h3>{sleeping[1].name}</h3>
                <h3>${sleeping[1].price} CAD</h3>
              </div>
            </Link>
          </div>
          <div className="item">
            <Link to='/shop/tent7'>
              <img className='item-image' src={tents[6].image} alt={tents[6].name}></img>
              <div className='item-info'>
                <h3>{tents[6].name}</h3>
                <h3>${tents[6].price} CAD</h3>
              </div>
            </Link>
          </div>
          <div className="item">
            <Link to='/shop/furniture4'>
              <img className='item-image' src={furniture[3].image} alt={furniture[3].name}></img>
              <div className='item-info'>
                <h3>{furniture[3].name}</h3>
                <h3>${furniture[3].price} CAD</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
