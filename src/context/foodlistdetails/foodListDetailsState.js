import React, { useContext, useReducer } from 'react'
import { foodListDetailsReducer } from './foodListDetailsReducer'
import { CREATE_FOOD_ITEM, ENABLE_FOODLIST, FETCH_ITEMS_FAILURE, FETCH_ITEMS_INIT, FETCH_ITEMS_SUCCESS, INIT_FOOD_LIST_NAME, REMOVE_FOOD_ITEM, SELECT_FOOD_ITEM, SET_FOOD_ITEMS, STORE_FAILURE, STORE_SUCCESS } from '../types'
import { FoodListDetailsContext } from './foodListDetailsContext'
import axiosFoodlist from '../../axios/axios-foodlist'
import { AuthorizationContext } from '../authorization/authorizationContext'


export const FoodListDetailsState = ({children}) => {

  const {userId} = useContext(AuthorizationContext)

  const initialState =  {
    foodItems: [],
    foodListName: '',
    disabled: true,
    loading: false,
    isErrorStore: false,
    isErrorFetch: false
  }

  const [state, dispatch] = useReducer(foodListDetailsReducer, initialState)


  const create = (itemName) => {
    //state.foodItems.push({itemName: itemName, checked: false})
    state.foodItems.unshift({itemName: itemName, checked: false})
    dispatch({
        type: CREATE_FOOD_ITEM,
        payload: state.foodItems
    })
  }

  const storeData = async (foodListName = state.foodListName) => {
    try {
      // await axiosFoodlist.delete(`${userId}/foodLists/${state.foodListName}.json`)
      await axiosFoodlist.put(`foodlists/${userId}/${foodListName}.json`, state.foodItems)
      dispatch({
        type: STORE_SUCCESS
      })
    } catch (error) {
      console.log('Error: ', error)
      dispatch({
        type: STORE_FAILURE
      })
    }
  }

  const enable = () => {
    dispatch({
      type: ENABLE_FOODLIST
    })
  }

//   const copyItems = (foodListName, id) => {
//     fetchItems(foodListName).then(() =>{
//  //     console.log(state.foodItems)
//       if(!!state.foodItems.length) {
//         console.log(foodListName + `${id}`)

//         initName(foodListName + `${id}`)
//         console.log(state)
//         storeData(foodListName + `${id}`)
//       }
//     })

//   }

  const fetchItems = async (foodListname) => {
  //   dispatch({
  //     type: INIT_FOOD_LIST_NAME,
  //     payload: foodListName
  // })
    dispatch({ type: FETCH_ITEMS_INIT })

    try {
        const response = await axiosFoodlist.get(`foodlists/${userId}/${foodListname}.json`)
        //console.log(response.data)
        state.foodItems = []
        if(!!response.data) {
          dispatch({ type: FETCH_ITEMS_SUCCESS, payload: state.foodItems })
          state.foodItems.push(...response.data)
          dispatch({ type: FETCH_ITEMS_SUCCESS, payload: state.foodItems })
        } else {
          dispatch({ type: FETCH_ITEMS_SUCCESS, payload: state.foodItems })
        }
    }catch (error) {
      console.log("Error: ", error)
        dispatch({ type: FETCH_ITEMS_FAILURE })
      }
}

  const initName = (foodListName) => {
    dispatch({
      type: INIT_FOOD_LIST_NAME,
      payload: foodListName
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
    state.foodItems.push(state.foodItems.splice(index, 1)[0])
    dispatch({
      type: SELECT_FOOD_ITEM,
      payload: state.foodItems
  })
  }

const {foodItems,foodListName, loading, isErrorStore, isErrorFetch, disabled} = state

  return (
    <FoodListDetailsContext.Provider value={{dispatch, storeData, fetchItems, create, remove, set, select,initName, enable, foodItems,foodListName, loading, isErrorStore, isErrorFetch, disabled}}>
        {children}
    </FoodListDetailsContext.Provider>
  )
}