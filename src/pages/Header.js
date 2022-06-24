import { Link } from "react-router-dom";
import '../styles/header.css'

const Header = () => {
  return (
    <div className="header">
      <h1><Link to='/'>Campify</Link></h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'><span class="material-symbols-outlined">shopping_bag</span></Link>
      </nav>
    </div>
  );
};

export default Header;
