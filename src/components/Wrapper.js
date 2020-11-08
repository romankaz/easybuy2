import React, { useContext, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthorizationContext } from '../context/authorization/authorizationContext'
import { Authorization } from '../pages/Authorization'
import { FoodListDetails } from '../pages/FoodListDetails'
import { Home } from '../pages/Home'
import { Alert } from './Alert'

export const Wrapper = () => {

  const authorization = useContext(AuthorizationContext)

  useEffect( () => {
    authorization.autoLogin()
  }, [])

  let routes = (
    <Switch>
      <Route path="/" exact component={Authorization} />
    </Switch>
  )

  if(authorization.token) {
    routes = (
    <Switch>
      <Route path="/" exact component={Authorization} />
      <Route path="/home" component={Home} />
      <Route path="/foodlist/:name" component={FoodListDetails} />
    </Switch>
    )
  }

return (

  <div className="container pt-4">
    <Alert />
    {routes}
  </div>

  )
}