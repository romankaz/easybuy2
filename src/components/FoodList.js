import React, { useContext } from 'react'
import { FoodListContext } from '../context/foodlists/foodListContext'

export const FoodList = ({foodList, index}) => {

    const foodLists = useContext(FoodListContext)

    const removeFoodList = (id) => {
       foodLists.remove(id)
    }

    return (
        <li className="nav-item  d-flex justify-content-between align-items-center p-2">
            <a className="nav-link active" href={'/foodlist/' + foodList.text}>
                <i className="fas fa-shopping-cart mx-2" style={{color: '#17a2b8'}}/>
                {foodList.text}
            </a>
            <button type="button" className="close ml-auto p-2" aria-label="Close" onClick={event => removeFoodList(event.target.id)}>
                <span id={index} aria-hidden="true" style={{color: 'red'}}>&times;</span>
             </button>
        </li>
    )
}