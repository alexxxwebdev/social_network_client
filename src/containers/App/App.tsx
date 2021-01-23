import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import {Router, RouteProps} from 'react-router-dom'
import useRoutes from 'router'
import { history } from 'redux/store/store'
import { IRootReducer } from 'redux/reducers/state'
import {IAuth} from 'types/auth'

import Fallback from 'components/Fallback'

import styles from './App.styl'

interface IMainRouterProps extends RouteProps {
    auth: IAuth,
}

const App: React.FC<IMainRouterProps> = ({auth}) => {
  const routes = useRoutes(auth)
  return (
    <Router history={history}>
      <Suspense fallback={<Fallback />}>
        <section className={styles.app}>
          {routes}
        </section>
      </Suspense>
    </Router>
  )
}

const mapStateToProps = (state: IRootReducer): IMainRouterProps => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App)
