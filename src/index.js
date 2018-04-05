import React from 'react'
import ReactDOM from 'react-dom'

import GifsSearchEngine from './gif-search-app/containers/GifsSearchEngineContainer'
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
      <Route path="/" component ={GifsSearchEngine}/>
      <Route path="favorites" component ={Favorites}/>
      <GifsSearchEngine/>
    </Router>
  </Provider>,
  document.getElementById('app')
)

