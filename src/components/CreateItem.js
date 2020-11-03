import React, { useState, useContext } from 'react'
import { FoodListDetailsContext } from '../context/foodlistdetails/foodListDetailsContext'
import { AlertContext } from '../context/alert/alertContext'


export const CreateItem = ({foodListName}) => {

  const [value, setValue] = useState('')
  const foodItems = useContext(FoodListDetailsContext)
  const alert = useContext(AlertContext)

  const addFoodItem = () => {
    if(value.trim()) {
      alert.hide()
      foodItems.create(`${value}`)
    } else {
      alert.show('Enter the name of the food item!')
    }
  }

  const removeInput = () => {
    document.getElementById('foodList').value = ''
    setValue('')
  }

  return (
    <div className='sticky-top' style={{backgroundColor:'white'}}>
      <h2 style={{marginTop: '1rem', marginBottom: '1rem', color: 'rgb(23, 162, 184)'}}>{foodListName}</h2>
      <div className='input-group mb-3' style={{position: 'static'}}>
        <input id="foodList" type='text' className='form-control' placeholder='Add a food item to your list ...'
              value={value} onChange={event => setValue(event.target.value)} onFocus={removeInput}/>
        <div className='input-group-append'>

            <button className='btn btn-info' type='button' onClick={addFoodItem}>Add
            </button>
        </div>
      </div>
    </div>

  )
}
