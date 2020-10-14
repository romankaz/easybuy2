import { CREATE_FOOD_ITEM, REMOVE_FOOD_ITEM } from "../types";

const handlers = {
    [CREATE_FOOD_ITEM]: (state, {payload}) => ({...state, foodItems: payload, loading: false}),
    [REMOVE_FOOD_ITEM]: (state, {payload}) => ({...state, foodItems: payload, loading: false}),
    DEFAULT: state => state
}

export const foodListDetailsReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}