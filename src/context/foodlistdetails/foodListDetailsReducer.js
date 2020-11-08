import { CREATE_FOOD_ITEM, INIT_FOOD_LIST_NAME, REMOVE_FOOD_ITEM, SELECT_FOOD_ITEM, SET_FOOD_ITEMS, STORE_FAILURE } from "../types";

const handlers = {
    [CREATE_FOOD_ITEM]: (state, {payload}) => ({...state, foodItems: payload, loading: false}),
    [REMOVE_FOOD_ITEM]: (state, {payload}) => ({...state, foodItems: payload, loading: false}),
    [SET_FOOD_ITEMS]: (state, {payload}) => ({...state, foodItems: payload, loading: false}),
    [SELECT_FOOD_ITEM]: (state, {payload}) => ({...state, foodItems: payload, loading: false}),
    [INIT_FOOD_LIST_NAME] : (state, {payload}) => ({...state, foodListName: payload.foodListName}),
    [STORE_FAILURE] : (state, {payload}) => ({...state, isError: true}),
    DEFAULT: state => state
}

export const foodListDetailsReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}