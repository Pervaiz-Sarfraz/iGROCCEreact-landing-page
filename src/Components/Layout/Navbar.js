import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <a exact to="/" className="nav-logo">
          <span>i</span>GROCCE
        </a>
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#home"
                activeClassName="active"
                className="nav-as"
                onClick={click ? handleClick : null}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                // exact
                // to={{ pathname: "/About", hash: "#about" }}
                activeClassName="active"
                className="nav-as"
                onClick={click ? handleClick : null}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Dish"
                activeClassName="active"
                className="nav-as"
                onClick={click ? handleClick : null}
              >
                Dish
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Order"
                activeClassName="active"
                className="nav-as"
                onClick={click ? handleClick : null}
              >
                Order
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#Review"
                activeClassName="active"
                className="nav-as"
                onClick={click ? handleClick : null}
              >
                Review{" "}
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
