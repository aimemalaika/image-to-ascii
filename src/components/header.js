import { Link } from 'react-router-dom';
import logo from '../images/pixels-logong.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="header__logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link to="/">Live Feed</Link>
              </li>
              <li className="header__nav-item">
                <Link to="/about">Image Trasform</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
