import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="nav">
        <h1 className="nav__logo"><NavLink to={'/'}>Movies Box</NavLink></h1>
        <div className="nav-wrapper">
          <ul className="nav__menu">
            <li className="nav_item">
              <NavLink exact activeClassName="is-active" to={'/'}>
              <button class="dropbtn">Home</button>
              </NavLink>
            </li>
            <li id="movies" className="nav_item">
              <ul className="dropdown">
                  <button class="dropbtn">Movies</button>
                  <div class="dropdown-content">
                    <li className="nav__subitem">
                      <NavLink to={"/action"}>Action</NavLink>
                    </li>
                    <li className="nav__subitem">
                      <NavLink to={"/crime"}>Crime</NavLink>
                    </li>
                    <li className="nav__subitem">
                      <NavLink to={"/drama"}>Drama</NavLink>
                    </li>
                    <li className="nav__subitem">
                      <NavLink to={"/thriller"}>Thriller</NavLink>
                    </li>
                  </div>
              </ul>
            </li>
            <li className="nav_item">
              <NavLink to={"/watchlist"}><button class="dropbtn">Watchlist</button></NavLink>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Header;