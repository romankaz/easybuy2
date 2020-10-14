import React, { useContext } from 'react'
import { FoodListContext } from '../context/foodlists/foodListContext'

export const FoodList = ({foodList, index}) => {

    const foodLists = useContext(FoodListContext)

    const removeFoodList = (id) => {
       foodLists.remove(id)
    }

    console.log(foodList)

    return (
        <div className="d-flex">
            <a href={'/foodlist/' + foodList.text} className="list-group-item list-group-item-action d-flex justify-content-start p-2">
                <span className="align-middle">
                    <i className="fas fa-shopping-cart mx-2" style={{color: '#17a2b8'}}/>
                </span>{foodList.text}
            </a>
            <button type="button" className="close ml-auto p-2" aria-label="Close" onClick={event => removeFoodList(event.target.id)}>
                <span id={index} aria-hidden="true" style={{color: 'red'}}>&times;</span>
            </button>
        </div>

    )
}