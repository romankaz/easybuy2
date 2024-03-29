import React, { useReducer } from 'react'
import { HIDE_ALERT, SHOW_ALERT } from '../types'
import { alertReducer } from './alertReducer'
import { AlertContext } from './alertContext'

export const AlertState = ({children}) => {

    const [state, dispatch] = useReducer(alertReducer, null)

    const hide = () => dispatch({type: HIDE_ALERT})

    const show = (text, type = 'secondary') => {
        dispatch({
            type: SHOW_ALERT,
            payload: {type, text}
        })
    }

    return (
        <AlertContext.Provider value={{
            hide, show, alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )

}