import React from 'react'
import { NavLink } from 'react-router-dom'
import "./styles/Header.css"

const Header = () => {
  return (
    <header className='header'>
        <NavLink className="header-pageName" to="/"> <h1>e-commerce</h1></NavLink>
        <ul className='header-navBar'>
            <li className='header-link'><NavLink to="/login"><i className='bx bx-user'></i></NavLink></li>
            <li className='header-link'><NavLink to="/purchases"><i className='bx bx-box' ></i></NavLink></li>
            <li className='header-link'><NavLink to="/cart"><i className='bx bx-cart' ></i></NavLink></li>
        </ul>
    </header>
  )
}

export default Header