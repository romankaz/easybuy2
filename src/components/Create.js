import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertConext'

export const Create = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const onClick = () => {
        if(value.trim()) {
            alert.hide()
            console.log(value)
        } else {
            alert.show('Enter the name of the food list!')
        }
    }

    return (
        <div className='input-group mb-3'>
            <input type='text' className='form-control' placeholder='Create a food list'
                   value={value} onChange={event => setValue(event.target.value)}
            />
            <div className='input-group-append'>
                <button className='btn btn-info' type='button' onClick={onClick}>Create
            </button>
            </div>
        </div>
    )





}