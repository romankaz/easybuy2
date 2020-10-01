import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark bg-info navbar-expand-lg">
       <div className="navbar-brand">
           EasyBuy
        </div> 
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Main </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/recipes" className="nav-link"> Recipes</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/offers" className="nav-link"> Offers</NavLink>
            </li>
        </ul> 
    </nav>
)