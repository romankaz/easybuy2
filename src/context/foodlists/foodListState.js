import React, { useContext, useEffect, useReducer } from 'react'
import { CREATE_FOOD_LIST, REMOVE_FOOD_LIST } from '../types'
import { foodListReducer } from './foodListReducer'
import { FoodListContext } from './foodListContext'
import axios from '../../axios/axios-foodlist'
import { AuthorizationContext } from '../authorization/authorizationContext'

export const FoodListState = ({children}) => {

    //const {userId} = useContext(AuthorizationContext)

    const initialState = {
        foodLists: [],
        loading: false
    }

    const [state, dispatch] = useReducer(foodListReducer, initialState)

    // const hide = () => dispatch({type: HIDE_ALERT})

    const create = (text) => {
        state.foodLists.push({text})
        dispatch({
            type: CREATE_FOOD_LIST,
            payload: state.foodLists
        })
 //       createFoodList(state.foodLists)

    }

    useEffect(() => {

    },[])

    // async function createFoodList(foodList) {
    //     const response = await axios.post(`foodLists/${userId}.json`, foodList)
    //     const response = await axios.get(`foodLists/${userId}.json`)
    //     console.log(response.data)
    //     console.log(userId)
    // }

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