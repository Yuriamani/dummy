import { Link } from "react-router-dom";
import './navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Homepage</Link>
      <Link to="/games">Games</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
      <Link to="/order-history">OrderHistory</Link>
    </nav>
  );
}

export default NavBar;