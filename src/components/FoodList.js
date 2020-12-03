import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { FoodListDetailsContext } from '../context/foodlistdetails/foodListDetailsContext'
import { FoodListContext } from '../context/foodlists/foodListContext'

export const FoodList = ({ foodList, index }) => {

    const foodLists = useContext(FoodListContext)
    const alert = useContext(AlertContext)
    const foodItems = useContext(FoodListDetailsContext)

    const removeFoodList = (id) => {
        foodLists.remove(id)
        if (foodLists.isError) {
            alert.show('Something went wrong...try again', 'danger')
        } else {
            alert.show('Food List is removed successfully!', 'success')
        }
    }

    // const copyFoodList = (event) => {
    //     console.log(event.target.id)
    //    foodItems.copyItems(foodLists.foodLists[event.target.id], event.target.id)

    // }

    return (
            <li className="nav-item  d-flex justify-content-between align-items-center p-2">
                <a className="nav-link active" href={'/foodlist/' + foodList}>
                    <i className="fas fa-shopping-cart mx-2" style={{ color: '#17a2b8' }} />
                    {foodList}
                </a>

                <div className='dropleft'>
                    <button type="button" className="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        {/* <a className="dropdown-item" style={{color:'#17a2b8'}} href="#" id={index} onClick={copyFoodList}>Copy</a>
                        <div role="separator" className="dropdown-divider"></div> */}
                        <a className="dropdown-item" href="#" style={{color:'red'}} id={index} onClick={event => removeFoodList(event.target.id)}>Remove</a>
                    </div>
                </div>


            </li>
    )
}