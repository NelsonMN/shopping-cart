import Header from "./Header";
import Footer from "./Footer";
import '../styles/home.css'
import homeBackground from '../images/home-background.jpg'
import { Link } from "react-router-dom";
import furniture from '../data/furniture'
import sleeping from '../data/sleeping'
import tents from '../data/tents'

const Home = () => {
  return (
    <div className="body">
      <Header />
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
            <div className="item-image">
              <Link to='/shop/furniture1'><img src={furniture[0].image} alt={furniture[0].name}></img></Link>
            </div>
            <div className="item-image">
              <Link to='/shop/sleeping2'><img src={sleeping[1].image} alt={sleeping[1].name}></img></Link>
            </div>
            <div className="item-image">
              <Link to='/shop/tent7'><img src={tents[6].image} alt={tents[6].name}></img></Link>
            </div>
            <div className="item-image">
              <Link to='/shop/furniture4'><img src={furniture[3].image} alt={furniture[3].name}></img></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
