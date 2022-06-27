import { Link } from "react-router-dom";
import '../styles/header.css'

const Header = ({ cart }) => {
  return (
    <div className="header">
      <h1><Link to='/'>Campify</Link></h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link className="cart" to='/cart'><span className="material-symbols-outlined">shopping_bag</span><span className="cart-count">{cart}</span></Link>
      </nav>
    </div>
  );
};

export default Header;
