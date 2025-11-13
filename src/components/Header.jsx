import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Colleen Murray</Link>
        </h1>
        <nav>
          <ul>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/work">work</Link></li>
            <li><Link to="/resume">resume</Link></li>
            <li><Link to="/contact">contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}