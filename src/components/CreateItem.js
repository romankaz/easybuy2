import React, { useState, useContext, useEffect } from 'react'
import { FoodListDetailsContext } from '../context/foodlistdetails/foodListDetailsContext'
import { AlertContext } from '../context/alert/alertContext'


export const CreateItem = ({foodListName}) => {

  const [value, setValue] = useState('')
  const [save, disableSave] = useState(false)
  const foodItems = useContext(FoodListDetailsContext)
  const alert = useContext(AlertContext)


  const addFoodItem = () => {
    if(value.trim()) {
      alert.hide()
      foodItems.create(`${value}`)
    } else {
      alert.show('Enter the name of the food item!', 'danger')
    }
  }

  const handleSave = (event) => {
    event.preventDefault()
    //foodItems.initName(foodListName)
    foodItems.storeData()
    if(foodItems.isError) {
        alert.show("Something went wrong...try again", 'danger')
    } else {
      // disableSave(true)
      alert.show("Food list is saved successfully!", 'success')
    }
}

  const removeInput = () => {
    document.getElementById('foodList').value = ''
    setValue('')
  }

  const editFoodList = (event) => {
    event.preventDefault()
    foodItems.enable()
  }

  return (
    <div className='sticky-top' style={{backgroundColor:'white'}}>
      <form className="form-inline my-2 my-lg-0 justify-content-between">
        <button className="btn btn-outline-info mr-sm-2" type="submit" onClick={editFoodList} disabled={!foodItems.disabled}>Edit</button>
        <button className='btn btn-outline-info' disabled={foodItems.disabled} type='button' onClick={handleSave}>Save food list</button>
      </form>

      <h2 style={{marginTop: '1rem', marginBottom: '1rem', color: 'rgb(23, 162, 184)'}}>{foodListName}</h2>

      <div className='input-group mb-3' style={{position: 'static'}}>
        <input id="foodList" type='text' autoComplete="off" className='form-control' disabled={foodItems.disabled} placeholder='Add a food item to your list ...'
              value={value} onChange={event => setValue(event.target.value)} onFocus={removeInput}/>
        <div className='input-group-append'>

            <button className='btn btn-info' type='button' disabled={foodItems.disabled} onClick={addFoodItem}>Add
            </button>
        </div>
      </div>
    </div>

  )
}
