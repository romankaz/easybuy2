import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthorizationContext } from '../context/authorization/authorizationContext'

export const Authorization = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const authorization = useContext(AuthorizationContext)

  const history = useHistory();

  const loginHandler = () => {
    if(email.trim() && password.trim()) {
      authorization.setCred(email, password, true)
      history.push('/')
    }

  }

  const registerHandler = () => {
    if(email.trim() && password.trim()) {
      authorization.setCred(email, password, false)
      history.push('/')
    }
  }

  return (
    // <h1>
    // Authorization Page
    // </h1>
    <div className="container">
      <div id="login-row" className="row justify-content-center align-items-center">
          <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                  {/* <form id="login-form" class="form" action="" method="post"> */}
                      <h3 className="text-center text-info">Authorization</h3>
                      <div className="form-group">
                          <label className="text-info">Username:</label><br/>
                          <input type="email" name="username" id="username" className="form-control" value={email} onChange={event => setEmail(event.target.value)}/>
                      </div>
                      <div className="form-group">
                          <label className="text-info">Password:</label><br/>
                          <input type="password" name="password" id="password" className="form-control" value={password} onChange={event => setPassword(event.target.value)}/>
                      </div>
                      <div className="form-group">
                          <label className="text-info">
                            <span>Remember me</span> 
                            <span><input id="remember-me" name="remember-me" type="checkbox"/>
                              </span>
                            </label><br/>
                        <div className="row-md-12 d-flex justify-content-between">
                          <button type="button" className="btn btn-info btn-md" onClick={loginHandler}>Log in</button>
                          <button type="button" className="btn btn-info btn-md" onClick={registerHandler}>Sign up</button>
                        </div>
                      </div>
                      <div id="register-link" className="text-right">
                          <a href="#" className="text-info">Forgot password</a>
                      </div>
                  {/* </form> */}
              </div>
          </div>
      </div>
  </div>
  )
}