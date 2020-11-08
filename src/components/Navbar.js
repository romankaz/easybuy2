import React, { useContext } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AlertContext } from '../context/alert/alertContext';
import { AuthorizationContext } from '../context/authorization/authorizationContext';
import { FoodListDetailsContext } from '../context/foodlistdetails/foodListDetailsContext';

export const Navbar = () => {

    const authorization = useContext(AuthorizationContext)
    const foodItems = useContext(FoodListDetailsContext)
    const alert = useContext(AlertContext)

    const history = useHistory();
    const handleLogout = (event) => {
        event.preventDefault()
        authorization.logout()
        history.push('/')
    }

    const handleSave = (event) => {
        event.preventDefault()
        console.log(authorization)
        foodItems.storeData()
        if(foodItems.isError) {
            alert.show("Something went wrong...")
        }
        console.log('Saved!')

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
        {!!authorization.token
        ? <form className="form-inline my-2 my-lg-0">
            {!!foodItems.foodItems.length
            ? <button className="btn btn-outline-light mr-sm-2" type="submit" onClick={handleSave}>Save</button>
            : <button className="btn btn-outline-light mr-sm-2" disabled type="submit" onClick={handleSave}>Save</button>
            }
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={handleLogout}>Log out</button>
          </form>
        : <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-light my-2 my-sm-0" disabled type="submit" onClick={handleLogout}>Log out</button>
         </form>
        }

    </nav>
)
}