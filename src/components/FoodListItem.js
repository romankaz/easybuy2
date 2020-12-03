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

  const markItem = (event) => {
    event.preventDefault()
    foodItems.select(event.target.id)
  }

  return (
      <li className= {itemClassName} id={index} onDoubleClick={markItem}>
        <span className='align-middle'id={index}>
          <i className="fas fa-shopping-basket mx-2 my-2" style={{color: '#17a2b8'}} id={index}/>
          {foodItem.itemName}
        </span>

        {/* <button type="button" class="btn btn-outline-danger" id={index} disabled={foodItems.disabled} onClick={event => removeFoodItem(event.target.id)}>X</button> */}

        {/* <button type="button" className="close ml-auto p-2" disabled={foodItems.disabled} aria-label="Close" onTouchEnd={event => removeFoodItem(event.target.id)}>
          <span id={index} aria-hidden="true" style={{color: 'red'}}>&times;</span>
        </button> */}


        <div className='dropleft'>
            <button type="button" className="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdownMenuButton">
                <span className="sr-only">Toggle Dropdown</span>
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#" style={{color:'red'}} id={index} onClick={event => removeFoodItem(event.target.id)}>Remove</a>
            </div>
        </div>
      </li>
  )
}





