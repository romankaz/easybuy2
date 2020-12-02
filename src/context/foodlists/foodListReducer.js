import { CREATE_FOOD_LIST, DELETE_LIST_FAILURE, FETCH_LISTS_FAILURE, FETCH_LISTS_INIT, FETCH_LISTS_SUCCESS, REMOVE_FOOD_LIST } from "../types";

const handlers = {
    [CREATE_FOOD_LIST]: (state, {payload}) => ({...state, foodLists: payload, isError: false, loading: false}),
    [REMOVE_FOOD_LIST]: (state, {payload}) => ({...state, foodLists: payload, isError: false, loading: false}),

    [FETCH_LISTS_INIT]: (state, {payload}) => ({...state, loading: true, isError: false}),
    [FETCH_LISTS_SUCCESS]: (state, {payload}) => ({...state, foodLists: payload, isError: false, loading: false}),
    [FETCH_LISTS_FAILURE]: (state, {payload}) => ({...state, loading: false, isError: true}),
    [DELETE_LIST_FAILURE]: (state, {payload}) => ({...state, loading: false, isError: true}),

    DEFAULT: state => state
}

export const foodListReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}