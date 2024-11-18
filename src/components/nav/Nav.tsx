import "./Nav.scss"
import Logo from "../../assets/Logo.tsx";
import Search from "../../assets/Search.tsx";
import World from "../../assets/World.tsx";
import Heart from "../../assets/Heart.tsx";
import { NavLink, Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SearchPanel from "../search-panel/SearchPanel.tsx";

const Nav = () => {
  const {pathname} = useLocation();
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="nav" id="nav" role="navigation">
      <div className="container container--sm">
        <div className="nav__wrapper">
          <Link to="/" className="nav__logo">
            <Logo/>
          </Link>
          
          <div className="nav__bottom">
            <button 
              className={`nav__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={`nav__list ${isMobileMenuOpen ? 'nav__list--open' : ''}`}>
                <li className={`list__item ${pathname === "/" ? "active" : ""}`}><NavLink className="navigation-home" to={"/"}> <span>Home</span> </NavLink></li>
                <li className="list__item">Collections</li>
                <li className="list__item">Company</li>
                <li className="list__item">Retail&Service</li>
                <li className={`list__item ${isSearchActive ? "item-active" : ""}`} onClick={() => setIsSearchActive(!isSearchActive)}><Search/></li>
                <li className="list__item"><World/></li>
                <li className="list__item">  <Link style={{display:"flex"}} to="/like"><Heart/> <span>(0)</span></Link> </li>
            </ul>
            {isSearchActive && <SearchPanel setSearchActive={setIsSearchActive}/>}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav