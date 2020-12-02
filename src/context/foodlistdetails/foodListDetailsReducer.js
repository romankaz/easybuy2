import { CREATE_FOOD_ITEM, ENABLE_FOODLIST, FETCH_ITEMS_FAILURE, FETCH_ITEMS_INIT, FETCH_ITEMS_SUCCESS, INIT_FOOD_LIST_NAME, REMOVE_FOOD_ITEM, SELECT_FOOD_ITEM, SET_FOOD_ITEMS, STORE_FAILURE, STORE_SUCCESS } from "../types";

const handlers = {
    [CREATE_FOOD_ITEM]: (state, {payload}) => ({...state, foodItems: payload, loading: false}),
    [REMOVE_FOOD_ITEM]: (state, {payload}) => ({...state, foodItems: payload, loading: false}),
    [SET_FOOD_ITEMS]: (state, {payload}) => ({...state, foodItems: payload, loading: false}),
    [SELECT_FOOD_ITEM]: (state, {payload}) => ({...state, foodItems: payload, loading: false}),
    [INIT_FOOD_LIST_NAME] : (state, {payload}) => ({...state, foodListName: payload}),
    [STORE_SUCCESS] : (state, {payload}) => ({...state, disabled: true}),
    [STORE_FAILURE] : (state, {payload}) => ({...state, isError: true}),
    [ENABLE_FOODLIST] : (state, {payload}) => ({...state, disabled: false}),

    [FETCH_ITEMS_INIT]: (state, {payload}) => ({...state, loading: true, isError: false}),
    [FETCH_ITEMS_SUCCESS]: (state, {payload}) => ({...state, foodItems: payload, isError: false, loading: false}),
    [FETCH_ITEMS_FAILURE]: (state, {payload}) => ({...state, loading: false, isError: true}),

    DEFAULT: state => state
}

export const foodListDetailsReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}