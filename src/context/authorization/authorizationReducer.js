import { AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR } from "../types";

const handlers = {
    [AUTH_SUCCESS]: (state, {payload}) => ({...state, ...payload}),
    [AUTH_LOGOUT]: (state) => ({...state, token: null, userId: null}),
    [AUTH_ERROR]: (state, {payload}) => ({...state, ...payload}),

    DEFAULT: state => state
}

export const authorizationReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}