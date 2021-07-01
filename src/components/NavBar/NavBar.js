import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/Movie_icon.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div className='navbar-logo'>
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                <span>Movies App</span>
            </div>
            <div>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/Movies-App" >Home</NavLink>
                        <NavLink to="/Movies-App/favs" >Favorites</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}