import { Link, NavLink } from "react-router-dom";
import './header.css' 

const Header = () => {
  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is--active' : 'header__item-link'
  }  
  return (
    <header>
      <nav className="header">
        <NavLink to="/" className="header__logo">
          Cine Explorer
        </NavLink>
        <ul className="header__nav-list">
          <li className="header__list-item">
            <NavLink
                to="/"
                className={({ isActive })=>linkIsActive(isActive)}
            >
                Home
            </NavLink>
           </li>
          <li className="header__list-item">
            <NavLink
                to="/Menu"
                className={({ isActive })=>linkIsActive(isActive)}
            >
               Menu
            </NavLink>
          
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 
