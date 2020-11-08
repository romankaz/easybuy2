import React, { useContext, useReducer } from 'react'
import { foodListDetailsReducer } from './foodListDetailsReducer'
import { CREATE_FOOD_ITEM, INIT_FOOD_LIST_NAME, REMOVE_FOOD_ITEM, SELECT_FOOD_ITEM, SET_FOOD_ITEMS, STORE_FAILURE } from '../types'
import { FoodListDetailsContext } from './foodListDetailsContext'
import axiosFoodlist from '../../axios/axios-foodlist'
import { AuthorizationContext } from '../authorization/authorizationContext'


export const FoodListDetailsState = ({children}) => {

  const {token, userId} = useContext(AuthorizationContext)

  const initialState =  {
    foodItems: [],
    foodListName: '',
    loading: false,
    isError: false
  }

  const [state, dispatch] = useReducer(foodListDetailsReducer, initialState)


  const create = (itemName) => {
    state.foodItems.push({itemName: itemName, checked: false})
    dispatch({
        type: CREATE_FOOD_ITEM,
        payload: state.foodItems
    })
  }

  const storeData = async () => {
    try {
      //await axiosFoodlist.delete(`${userId}/foodLists/${state.foodListName}.json`)
      console.log(token)
      await axiosFoodlist.put(`${userId}/foodLists/${state.foodListName}.json`, state.foodItems)
    } catch (error) {
      dispatch({
        type: STORE_FAILURE
      })
    }
  }

  const initName = (foodListName) => {
    dispatch({
      type: INIT_FOOD_LIST_NAME,
      payload: {foodListName}
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
    state.foodItems[index].checked = !state.foodItems[index].checked
    dispatch({
      type: SELECT_FOOD_ITEM,
      payload: state.foodItems
  })
  }

const {foodItems,foodListName, loading, isError} = state

  return (
    <FoodListDetailsContext.Provider value={{dispatch, storeData, create, remove, set, select, initName, foodItems,foodListName, loading, isError}}>
        {children}
    </FoodListDetailsContext.Provider>
  )
}