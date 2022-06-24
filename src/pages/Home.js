import Header from "./Header";
import '../styles/home.css'
import homeBackground from '../images/home-background.jpg'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="section1">
          <img src={homeBackground} alt="home-main"></img>
        </div>
        <div className="section2">
        </div>
      </div>
    </div>
  );
};

export default Home;
