 import React, { useContext } from 'react'
import { FoodListDetailsContext } from '../context/foodlistdetails/foodListDetailsContext'
// import { ReactSortable } from 'react-sortablejs'

// const CustomComponent = forwardRef((props, ref) => (
//   <ul ref={ref} className="list-group">{props.children}</ul>
// ))

export const FoodListItem = ({foodItem, index}) => {

  //console.log(foodItem)
  // console.log(index)

  const foodItems = useContext(FoodListDetailsContext)

  const removeFoodItem = (id) => {
      foodItems.remove(id)
  }

  return (
    //<li className='list-group-item'>{foodItem.itemName}</li>
    //<div className="d-flex">
      <li className='list-group-item d-flex justify-content-between align-items-center p-2'>
        <span className="align-middle">
          <i className="fas fa-shopping-basket mx-2" style={{color: '#17a2b8'}}/>
        </span>{foodItem.itemName}
        <button type="button" className="close ml-auto p-2" aria-label="Close" onClick={event => removeFoodItem(event.target.id)}>
         <span id={index} aria-hidden="true" style={{color: 'red'}}>&times;</span>
        </button>
      </li>
    //</div>

  )
}