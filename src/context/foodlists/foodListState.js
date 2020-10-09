import React, { useReducer } from 'react'
import { CREATE_FOOD_LIST, REMOVE_FOOD_LIST } from '../types'
import { foodListReducer } from './foodListReducer'
import { FoodListContext } from './foodListContext'

export const FoodListState = ({children}) => {

    const initialState = {
        foodLists: [],
        loading: false
    }

    const [state, dispatch] = useReducer(foodListReducer, initialState)

    // const hide = () => dispatch({type: HIDE_ALERT})

    const create = (text) => {
        // const newLists = []
        //state.foodList.length() > 0 ?
        state.foodLists.push({text})
        console.log(state.foodLists)
        dispatch({
            type: CREATE_FOOD_LIST,
            payload: state.foodLists
        })
    }

    const remove = (index) => {
        state.foodLists.splice(index, 1)

        dispatch({
            type: REMOVE_FOOD_LIST,
            payload: state.foodLists
        })
    }

   const {foodLists, loading} = state

   return (
        <FoodListContext.Provider value={{create, remove, foodLists, loading}}>
            {children}
        </FoodListContext.Provider>
   )

}