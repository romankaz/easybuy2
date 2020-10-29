import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { FoodListContext} from '../context/foodlists/foodListContext'

export const Create = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const foodLists = useContext(FoodListContext)


    const onClick = () => {
        if(value.trim()) {
            alert.hide()
            foodLists.create(`${value}`)

        } else {
            alert.show('Enter the name of the food list!')
        }
    }

    const removeInput = () => {
        document.getElementById('foodList').value = ''
        setValue('')
    }

    return (
        <div className='input-group mb-3'>
            <input id="foodList" type='text' className='form-control' placeholder='Enter the name of the new food list...'
                   value={value} onChange={event => setValue(event.target.value)} onFocus={removeInput}/>
            <div className='input-group-append'>
                <button className='btn btn-info' type='button' onClick={onClick}>Create
                </button>
            </div>
        </div>
    )
}