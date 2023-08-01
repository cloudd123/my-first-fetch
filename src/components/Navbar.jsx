import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
             <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/products" className="navbar-link">Products</Link>
            </li>
            <li className="navbar-item">
              <Link to="/users" className="navbar-link">Users</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
