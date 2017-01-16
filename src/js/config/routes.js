import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from '../containers/Main'
import Home from '../views/Home'
import PlayerSelect from '../views/PlayerSelect'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='player-select' component={PlayerSelect} />
    </Route>
  </Router>
)
