import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { IAuth } from 'types/auth'

const HomePage = React.lazy(() => import('pages/HomePage'))
const LoginPage = React.lazy(() => import('pages/LoginPage'))
const RegistrationPage = React.lazy(() => import('pages/RegistrationPage'))

const useRoutes = (auth: IAuth) =>
  auth.token ? (
    <Switch>
      <Route path='/profile'>
        <HomePage />
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route path='/registration'>
        <RegistrationPage />
      </Route>
      <Route path='/'>
        <LoginPage />
      </Route>
    </Switch>
  )

export default useRoutes