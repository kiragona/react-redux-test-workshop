import React from 'react';

import App from './gif-search-app/containers/AppContainer'
import {Provider} from 'react-redux'

import configureStore from './gif-search-app/store/configureStore'

const store = configureStore()

export default class Home extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}





