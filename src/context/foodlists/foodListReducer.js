import { CREATE_FOOD_LIST, DELETE_LIST_FAILURE, FETCH_LISTS_FAILURE, FETCH_LISTS_INIT, FETCH_LISTS_SUCCESS, REMOVE_FOOD_LIST } from "../types";

const handlers = {
    [CREATE_FOOD_LIST]: (state, {payload}) => ({...state, foodLists: payload, isErrorFetch: false, isErrorRemove: false, loading: false}),
    [REMOVE_FOOD_LIST]: (state, {payload}) => ({...state, foodLists: payload, isErrorFetch: false, isErrorRemove: false, loading: false}),

    [FETCH_LISTS_INIT]: (state, {payload}) => ({...state, loading: true,  isErrorFetch: false, isErrorRemove: false}),
    [FETCH_LISTS_SUCCESS]: (state, {payload}) => ({...state, foodLists: payload,  isErrorFetch: false, isErrorRemove: false, loading: false}),
    [FETCH_LISTS_FAILURE]: (state, {payload}) => ({...state, loading: false, isErrorFetch: true, isErrorRemove: false}),
    [DELETE_LIST_FAILURE]: (state, {payload}) => ({...state, loading: false, isErrorRemove: true, isErrorFetch: false}),

    DEFAULT: state => state
}

export const foodListReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}