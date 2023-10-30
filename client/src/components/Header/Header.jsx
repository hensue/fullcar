import React, { useRef, useEffect, useState } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import logo from '../../assets/logo/logo.png'

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/cars",
    display: "View Cars",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/contact",
    display: "Contact Us",
  }
];

const Header = () => {
  const menuRef = useRef(null);
  const [flag, setFlag] = useState(null)

  useEffect(()=>{
    setFlag(localStorage.getItem('token'))
    console.log(flag)
  },[])

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  // const token = localStorage.getItem('token')

  return (
    <header className="header">
      {
        flag !== null && flag !== '' ?
        <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                {/* <input type="text" placeholder="Search" /> */}
                {/* <Link to="/login" style={{marginRight:'20%', color:'white'}}>
                  Login
                </Link>
                <Link to="/register" style={{marginRight:'20%', color:'white'}}>
                  Register
                </Link> */}
                <Link to="/admin" style={{marginRight:'20%', color:'white'}}>
                  Admin
                </Link>
                <Link to="/">
                  <img src={logo} className="header-img"></img>
                </Link>

                <span>
                  {/* <i class="ri-search-line"></i> */}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      :
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                {/* <input type="text" placeholder="Search" /> */}
                <Link to="/login" style={{marginRight:'20%', color:'white'}}>
                  Login
                </Link>
                <Link to="/register" style={{marginRight:'20%', color:'white'}}>
                  Register
                </Link>
                {/* <Link to="/admin" style={{marginRight:'20%', color:'white'}}>
                  Admin
                </Link> */}
                <Link to="/">
                  <img src={logo} className="header-img"></img>
                </Link>

                <span>
                  {/* <i class="ri-search-line"></i> */}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      }
    </header>
  );
};

export default Header;
