import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from "react-icons/fi"
import { FaRecycle } from "react-icons/fa"

const Navbar = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const togglemenuClick = () => {
        setMenuClicked(!menuClicked);
    }

  return (
    <>
        <nav className='navbar'>
        <span className='navbar-logo'><FaRecycle />Remine India</span>
        {menuClicked ? (<FiMenu size={25} className="navbar-menu" onClick={togglemenuClick} />) : (<FiX size={25} className="navbar-menu" onClick={togglemenuClick} />)}
            <ul className={menuClicked ? "navbar-list" : "navbar-list navbar-list--active"}>
            <li className='navbar-link'>
                <Link to="/">Home</Link>
            </li>
            <li className='navbar-link'>
                 <Link to="/">Our Services</Link>
            </li>
            <li className='navbar-link'>
                <Link to="/contact">Contact Us</Link>
            </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
