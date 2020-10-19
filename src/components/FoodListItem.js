 import React, { useContext, useState } from 'react'
import { FoodListDetailsContext } from '../context/foodlistdetails/foodListDetailsContext'
// import { ReactSortable } from 'react-sortablejs'

// const CustomComponent = forwardRef((props, ref) => (
//   <ul ref={ref} className="list-group">{props.children}</ul>
// ))

export const FoodListItem = ({foodItem, index}) => {

  //console.log(foodItem)
  // console.log(index)
  let itemClassName = ''
  foodItem.checked ? itemClassName = 'list-group-item list-group-item-success d-flex justify-content-between align-items-center p-2'
                   : itemClassName = 'list-group-item d-flex justify-content-between align-items-center p-2'
  // const itemClassName = 'list-group-item d-flex justify-content-between align-items-center p-2'
  // const itemClassName2 = 'list-group-item list-group-item-success d-flex justify-content-between align-items-center p-2'

  const foodItems = useContext(FoodListDetailsContext)

  const removeFoodItem = (id) => {
    console.log('Hi removing')
      foodItems.remove(id)
  }

  ///const [style, setStyle] = useState('list-group-item')

  const markItem = (id) => {
    console.log('Hi marking')

    foodItems.select(id)
    // console.log(target.checked)
    // target.checked = !target.checked
    // target.checked ? target.className = itemClassName2 : target.className = itemClassName
    //setStyle(style === 'list-group-item list-group-item-danger' ? 'list-group-item' : 'list-group-item list-group-item-danger')
  }

  return (
      <li className= {itemClassName} id={index} onDoubleClick={event => markItem(event.target.id)}>
        {foodItem.itemName}
        {/* <span className="align-middle">
          <i className="fas fa-shopping-basket mx-2" style={{color: '#17a2b8'}}/>
        </span>{foodItem.itemName} */}
        <button type="button" className="close ml-auto p-2" aria-label="Close" onClick={event => removeFoodItem(event.target.id)}>
         <span id={index} aria-hidden="true" style={{color: 'red'}}>&times;</span>
        </button>
      </li>
  )
}