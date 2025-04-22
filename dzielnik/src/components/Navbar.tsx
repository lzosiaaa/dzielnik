import { Link } from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Strona główna</Link></li>
        <li><Link to="/map">Mapa</Link></li>
        <li><Link to="/login">Zaloguj się</Link></li>
        <li><Link to="/register">Rozpocznij</Link></li>

      </ul>
    </nav>
  );
}