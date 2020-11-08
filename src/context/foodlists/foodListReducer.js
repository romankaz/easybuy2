import { CREATE_FOOD_LIST, INIT_FOOD_LIST_NAME, REMOVE_FOOD_LIST } from "../types";

const handlers = {
    [CREATE_FOOD_LIST]: (state, {payload}) => ({...state, foodLists: payload, loading: false}),
    [REMOVE_FOOD_LIST]: (state, {payload}) => ({...state, foodLists: payload, loading: false}),
    DEFAULT: state => state
}

export const foodListReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}