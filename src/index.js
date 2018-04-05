import React from 'react'
import ReactDOM from 'react-dom'

import App from './gif-search-app/containers/AppContainer'
import Favorites from './gif-search-app/components/favorites/Favorites'
import {Provider} from 'react-redux'

import configureStore from './gif-search-app/store/configureStore'

import {Router, Route, browserHistory} from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component ={App}/>
      <Route path="favorites" component ={Favorites}/>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('app')
)

