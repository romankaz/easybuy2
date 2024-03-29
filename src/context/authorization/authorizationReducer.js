import { AUTH_SUCCESS, AUTH_LOGOUT } from "../types";

const handlers = {
    [AUTH_SUCCESS]: (state, {payload}) => ({...state, ...payload}),
    [AUTH_LOGOUT]: (state) => ({...state, token: null, userId: null}),

    DEFAULT: state => state
}

export const authorizationReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}