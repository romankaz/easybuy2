import React, { useContext, useReducer } from 'react'
import { CREATE_FOOD_LIST, REMOVE_FOOD_LIST, FETCH_LISTS_INIT, FETCH_LISTS_SUCCESS, FETCH_LISTS_FAILURE, DELETE_LIST_FAILURE } from '../types'
import { foodListReducer } from './foodListReducer'
import { FoodListContext } from './foodListContext'
import { AuthorizationContext } from '../authorization/authorizationContext'
import axiosFoodlist from '../../axios/axios-foodlist'

export const FoodListState = ({children}) => {

    const {userId} = useContext(AuthorizationContext)

    const initialState = {
        foodLists: [],
        loading: false,
        isError: false
    }

    const [state, dispatch] = useReducer(foodListReducer, initialState)

    // const hide = () => dispatch({type: HIDE_ALERT})

    const create = (text) => {
        state.foodLists.push(text)
        dispatch({
            type: CREATE_FOOD_LIST,
            payload: state.foodLists
        })
 //       createFoodList(state.foodLists)

    }

    const fetchLists = async () => {
        dispatch({ type: FETCH_LISTS_INIT })
        try {
            const response = await axiosFoodlist.get(`${userId}/foodLists.json?shallow=true`)
           // console.log(response.data)
            state.foodLists = []
            if(!!response.data) {
                dispatch({ type: FETCH_LISTS_SUCCESS, payload: state.foodLists })
                state.foodLists.push(...Object.keys(response.data))
                dispatch({ type: FETCH_LISTS_SUCCESS, payload: state.foodLists })
            } else {
                dispatch({ type: FETCH_LISTS_SUCCESS, payload: state.foodLists })
            }
        }catch (error) {
            console.log(error)
            dispatch({ type: FETCH_LISTS_FAILURE })
          }
    }

    // useEffect(() => {

    // },[])

    // async function createFoodList(foodList) {
    //     const response = await axios.post(`foodLists/${userId}.json`, foodList)
    //     const response = await axios.get(`foodLists/${userId}.json`)
    //     console.log(response.data)
    //     console.log(userId)
    // }

    const remove = (index) => {
        removeFoodList(state.foodLists[index])
        state.foodLists.splice(index, 1)

        dispatch({
            type: REMOVE_FOOD_LIST,
            payload: state.foodLists
        })
    }

    const removeFoodList = async (foodList) => {

        try {
            await axiosFoodlist.delete(`${userId}/foodLists/${foodList}.json`)
        } catch (error) {
            console.log(error)
            dispatch({ type: DELETE_LIST_FAILURE })
        }
    }

   const {foodLists, loading, isError} = state

   return (
        <FoodListContext.Provider value={{create, remove, fetchLists, foodLists, loading, isError}}>
            {children}
        </FoodListContext.Provider>
   )

}