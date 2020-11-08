import Axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { AUTH_LOGOUT, AUTH_SUCCESS } from '../types'
import { AuthorizationContext } from './authorizationContext'
import { authorizationReducer } from './authorizationReducer'


export const AuthorizationState = ({children}) => {

  const initialState =  {
    token: null,
    userId: null
  }

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    isLogin: false
  })

  const [state, dispatch] = useReducer(authorizationReducer, initialState)

  // const auth = (email, password, isLogin) => {
  //   state.foodItems.push({itemName: itemName, checked: false})
  //   dispatch({
  //       type: CREATE_FOOD_ITEM,
  //       payload: state.foodItems
  //   })
  // }

  const setCred = (email, password, isLogin) => {
    setCredentials({email, password, isLogin})
  }



  const {token, userId} = state

  useEffect( () => {

    let didCancel = false

    const email = credentials.email
    const password = credentials.password
    //console.log("Hello credentials!", email, password)

    if(email !== '' && password !== '')
    {
      const authData = {
        email,
        password,
        returnSecureToken:true
      }
      // Databank url: https://react-easybuy.firebaseio.com/
      let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_WX968WQBZBf86LE_dzFX-c-YqU0w3OM'
      if (credentials.isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA_WX968WQBZBf86LE_dzFX-c-YqU0w3OM'
      }

      async function auth() {
        const response = await Axios.post(url, authData)
        const data = response.data
        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expirationDate', expirationDate)

        dispatch(authSuccess(data.idToken, data.localId))


        autoLogout(data.expiresIn)
      }

      auth()

    }

    return () => {
      didCancel = true
    }
  },[credentials])

  const authSuccess = (token, userId) => {
    return {
      type: AUTH_SUCCESS,
      payload: {token, userId}
    }
  }

  const autoLogout = (time) => {
      setTimeout(() => {
         logout()
      },time * 1000)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    dispatch ({
        type: AUTH_LOGOUT
    })
  }

  const autoLogin = () => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    if(!token) {
      logout()
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'))
      if(expirationDate <= new Date()) {
        logout()
      } else {

        dispatch(authSuccess(token,userId))
        autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
      }
    }
  }


  return (
    <AuthorizationContext.Provider value={{setCred, logout, autoLogin, token, userId}}>
        {children}
    </AuthorizationContext.Provider>
  )

}