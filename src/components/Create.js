import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertConext'

export const Create = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const onClick = () => {
        alert.show('Enter the name of the food list!')
    }
    
    return (
        <div className='input-group mb-3'>
            <input type='text' className='form-control' placeholder='Create a food list' />
            <div className='input-group-append'>
                <button className='btn btn-info' type='button'
                onClick={onClick}>Create
                </button>
            </div>
        </div>
    )





}