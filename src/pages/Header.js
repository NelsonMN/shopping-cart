import { Link } from "react-router-dom";
import '../styles/header.css'

const Header = () => {
  return (
    <div className="header">
      <h1>Campify</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'>Cart</Link>
      </nav>
    </div>
  );
};

export default Header;
