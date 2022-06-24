import Header from "./Header";
import Footer from "./Footer";
import '../styles/home.css'
import homeBackground from '../images/home-background.jpg'
import { Link } from "react-router-dom";
import furniture from '../data/furniture'
import sleeping from '../data/sleeping'
import tents from '../data/tents'

const Home = () => {
  console.log(furniture[0].image)
  return (
    <div>
      <Header />
      <div className="home">
        <div className="section1">
          <div className="hero-text">
            <h1>Rediscover the joy of camping </h1>
            <button className="shop-button">Shop Now</button>
          </div>
          <img src={homeBackground} alt="hero-img"></img>
        </div>
        <div className="section2">
          <h1>Featured Items</h1>
          <div className="featured-items">
            <div className="featured">
              <img src={furniture[0].image} alt=''></img>
            </div>
            <div className="featured">
              <img src={sleeping[1].image} alt=''></img>
            </div>
            <div className="featured">
              <img src={tents[6].image} alt=''></img>
            </div>
            <div className="featured">
              <img src={furniture[3].image} alt=''></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
