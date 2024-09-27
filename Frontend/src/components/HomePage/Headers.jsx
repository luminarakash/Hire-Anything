import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navlinks = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Category', route: '/category' },
  { name: 'Contact', route: '/contact' },
  { name: 'Partner Signup', route: '/partner' },
  { name: 'Our Services', route: '/service' },
  { name: 'Dashboard', route: '/Dashboard' },
];

export default function Headers() {
  const [navBg, setNavBg] = useState('bg-[#4010f2]'); // Placeholder, update with your actual logic
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const socialItems = (
    <>
      <a href="https://www.facebook.com/profile.php?id=61565067325640&sk=photos"><i className="fa fa-facebook"></i>acebook</a>
    </>
  );

  return (
    <header id="header">
      <div className="header-top">
        <div className="container page-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-6 header-top-left"></div>
            <div className="col-lg-6 col-sm-6 col-6 header-top-right">
              <div className="header-social mb-50">
                {socialItems}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-menu">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <div className="mobile-container">
              <div className="topnav">
                <Link to="/" className='active'>
                  <img className="logo" src="image/Hireanything.jpg" alt="HireAnything Logo" title="HireAnything" />
                  <span className="sitename">Hireanything.com</span>
                </Link>
              </div>
              <div id="myLinks" className={menuOpen ? 'active' : ''}>
                <nav id="nav-menu-container page-wrapper">
                  <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    {navlinks.map(link => (
                      <li key={link.route}>
                        <NavLink
                          to={link.route}
                          className={({ isActive }) =>
                            `font-bold ${isActive ? 'text-yellow dark text-lg' : `${navBg.includes('bg-transparent') ? 'text-yellow' : 'text-yellow dark:text-yellow'}`} hover:text-yellow duration-300`
                          }
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
                <i className="fa fa-bars"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
