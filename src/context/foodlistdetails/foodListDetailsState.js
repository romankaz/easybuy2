import React, { useReducer } from 'react'
import { foodListDetailsReducer } from './foodListDetailsReducer'
import { CREATE_FOOD_ITEM, REMOVE_FOOD_ITEM, SELECT_FOOD_ITEM, SET_FOOD_ITEMS } from '../types'
import { FoodListDetailsContext } from './foodListDetailsContext'


export const FoodListDetailsState = ({children}) => {

  const initialState =  {
    foodItems: [],
    loading: false
  }

  const [state, dispatch] = useReducer(foodListDetailsReducer, initialState)


  const create = (itemName) => {
    // state.foodItems.length === null
    //     ? state.foodItems.push({id:0, itemName: itemName, checked: false})
    //     : state.foodItems.push({id: state.foodItems.length, itemName: itemName})
    state.foodItems.push({itemName: itemName, checked: false})
    // state.foodItems.push({itemName})
    //console.log(state.foodItems)
    dispatch({
        type: CREATE_FOOD_ITEM,
        payload: state.foodItems
    })
  }

  const remove = (index) => {
    state.foodItems.splice(index, 1)

    dispatch({
        type: REMOVE_FOOD_ITEM,
        payload: state.foodItems
    })
  }

  const set = (foodItems) => {
    dispatch({
      type: SET_FOOD_ITEMS,
      payload: foodItems
  })

  }

  const select =  (index) => {
    console.log(state.foodItems[index])
    state.foodItems[index].checked = !state.foodItems[index].checked
    dispatch({
      type: SELECT_FOOD_ITEM,
      payload: state.foodItems
  })
  }

const {foodItems, loading} = state

  return (
    <FoodListDetailsContext.Provider value={{create, remove, set, select, foodItems, loading}}>
        {children}
    </FoodListDetailsContext.Provider>
  )
}