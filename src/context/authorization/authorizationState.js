import Axios from 'axios'
import React, { useReducer } from 'react'
import { AUTH_ERROR, AUTH_LOGOUT, AUTH_SUCCESS } from '../types'
import { AuthorizationContext } from './authorizationContext'
import { authorizationReducer } from './authorizationReducer'


export const AuthorizationState = ({children}) => {

  const initialState =  {
    token: null,
    userId: null,
    error: { isError: false, message: ''}
  }

  // const [credentials, setCredentials] = useState({
  //   email: '',
  //   password: '',
  //   isLogin: false
  // })

  const [state, dispatch] = useReducer(authorizationReducer, initialState)

  // const auth = (email, password, isLogin) => {
  //   state.foodItems.push({itemName: itemName, checked: false})
  //   dispatch({
  //       type: CREATE_FOOD_ITEM,
  //       payload: state.foodItems
  //   })
  // }

  // const setCred = (email, password, isLogin) => {
  //   setCredentials({email, password, isLogin})
  // }

  const setCred = async (email, password, isLogin) => {
    const authData = {
      email,
      password,
      returnSecureToken:true
    }
     // Databank url: https://react-easybuy.firebaseio.com/
     let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_WX968WQBZBf86LE_dzFX-c-YqU0w3OM'
     if (isLogin) {
           url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA_WX968WQBZBf86LE_dzFX-c-YqU0w3OM'
     }

    try {
      const response = await Axios.post(url, authData)
      console.log(response)
      const data = response.data
      //console.log(data)
      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
      localStorage.setItem('token', data.idToken)
      localStorage.setItem('userId', data.localId)
      localStorage.setItem('expirationDate', expirationDate)
      autoLogout(data.expiresIn)
      dispatch(authSuccess(data.idToken, data.localId))
      } catch (error) {
        console.log('Error: ', error)
        dispatch({
          type: AUTH_ERROR,
          payload: {token: null, userId: null, error: {isError: true, message: error.response ? error.response.data.error.message : error.toString()}}
        })
      }
  }



  const {token, userId, error} = state

  // useEffect( () => {

  //   let didCancel = false

  //   const email = credentials.email
  //   const password = credentials.password
  //   //console.log("Hello credentials!", email, password)

  //   if(email !== '' && password !== '')
  //   {
  //     const authData = {
  //       email,
  //       password,
  //       returnSecureToken:true
  //     }
  //     // Databank url: https://react-easybuy.firebaseio.com/
  //     let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_WX968WQBZBf86LE_dzFX-c-YqU0w3OM'
  //     if (credentials.isLogin) {
  //           url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA_WX968WQBZBf86LE_dzFX-c-YqU0w3OM'
  //     }

  //     async function auth() {
  //       const response = null
  //       try {
  //         response = await Axios.post(url, authData)
  //         console.log(response)
  //         const data = response.data
  //         //console.log(data)
  //         const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
  //         localStorage.setItem('token', data.idToken)
  //         localStorage.setItem('userId', data.localId)
  //         localStorage.setItem('expirationDate', expirationDate)
  //         autoLogout(data.expiresIn)
  //         dispatch(authSuccess(data.idToken, data.localId))
  //        } catch (error) {
  //          console.log('Error: ', error.response.data.error.message)
  //          dispatch({
  //             type: AUTH_ERROR,
  //             payload: {token: null, userId: null, error: {...error, isError: true, message: error.response.data.error.message}}
  //          })
  //        }




  //     }

  //     auth()

  //   }

  //   return () => {
  //     didCancel = true
  //   }
  // },[credentials])

  const authSuccess = (token, userId) => {
    return {
      type: AUTH_SUCCESS,
      payload: {token, userId, error: {...error, isError: false, message: ''}
    }}
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
    <AuthorizationContext.Provider value={{setCred, logout, autoLogin, token, userId, error}}>
        {children}
    </AuthorizationContext.Provider>
  )

}