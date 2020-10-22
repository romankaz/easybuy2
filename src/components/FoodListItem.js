import React, { useContext} from 'react'
import { FoodListDetailsContext } from '../context/foodlistdetails/foodListDetailsContext'

export const FoodListItem = ({foodItem, index}) => {


  let itemClassName = ''
  foodItem.checked ? itemClassName = 'list-group-item list-group-item-success d-flex justify-content-between align-items-center p-2'
                   : itemClassName = 'list-group-item justify-content-between d-flex align-items-center p-2'

  const foodItems = useContext(FoodListDetailsContext)

  const removeFoodItem = (id) => {
      foodItems.remove(id)
  }

  const markItem = (id) => {
    foodItems.select(id)
  }

  return (
      <li className= {itemClassName}>
        <span className='align-middle' id={index} onClick={event => markItem(event.target.id)}>
          <i className="fas fa-shopping-basket mx-2 my-2" style={{color: '#17a2b8'}}/>
          {foodItem.itemName}
        </span>

        <button type="button" className="close ml-auto p-2" aria-label="Close" onClick={event => removeFoodItem(event.target.id)}>
          <span id={index} aria-hidden="true" style={{color: 'red'}}>&times;</span>
        </button>
      </li>
  )
}





