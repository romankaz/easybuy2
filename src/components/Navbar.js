import React, { useContext, useEffect } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthorizationContext } from '../context/authorization/authorizationContext';

export const Navbar = () => {

    const authorization = useContext(AuthorizationContext)

    const history = useHistory();
    const handleClick = () => {
        authorization.logout()
        history.push('/authorization')
    }

    useEffect( () => {
        authorization.autoLogin()
      }, [])


    return (
    <nav className="navbar navbar-dark bg-info navbar-expand-lg justify-content-between">
        <div>
            <div className="navbar-brand">
                EasyBuy
            </div>
            {!!authorization.token
                 ? <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link">My Food Lists</NavLink>
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
                        <NavLink to="/authorization" className="nav-link"> Authorization</NavLink>
                    </li>
                </ul>
            }
        </div>
        {!!authorization.token
        ? <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={handleClick}>Log out</button>
          </form>
        : <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-light my-2 my-sm-0" disabled type="submit" onClick={handleClick}>Log out</button>
         </form>
        }

    </nav>
)
}