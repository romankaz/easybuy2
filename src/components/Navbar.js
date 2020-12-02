import React, { useContext } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthorizationContext } from '../context/authorization/authorizationContext'

export const Navbar = ({match}) => {

    const authorization = useContext(AuthorizationContext)

    const history = useHistory();
    const handleLogout = (event) => {
        event.preventDefault()
        authorization.logout()

        history.push('/')
    }

    return (
    <nav className="navbar navbar-dark bg-info navbar-expand-lg justify-content-between">
        <div>
            <div className="navbar-brand">
                EasyBuy
            </div>
            {!!authorization.token
                 ? <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/home" className="nav-link">My Food Lists</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/recipes" className="nav-link"> Recipes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/offers" className="nav-link"> Offers</NavLink>
                            </li>
                    </ul>
                : <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link"> Authorization</NavLink>
                    </li>
                </ul>
            }
        </div>

        <form className="form-inline my-2 my-lg-0">
            {!!authorization.token
                ? <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={handleLogout}>Log out</button>
                : <button className="btn btn-outline-light my-2 my-sm-0" disabled type="submit" onClick={handleLogout}>Log out</button>
            }
        </form>

    </nav>
)
}