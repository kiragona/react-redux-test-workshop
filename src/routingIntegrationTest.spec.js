import test from 'tape'
import {createDom} from '../test/utils/index'

import React from 'react'
import {Provider} from 'react-redux'
import {mount} from 'enzyme'

import GifSearchEngineContainer from '../src/gif-search-app/containers/GifsSearchEngineContainer'
import configureStore from '../src/gif-search-app/store/configureStore'
import {createInitialAppState} from '../src/gif-search-app/store/rootReducer'
import Favorites from '../src/gif-search-app/containers/FavoritesContainer'
import {Router, Route, createMemoryHistory} from 'react-router'

import {syncHistoryWithStore} from 'react-router-redux'

test('Integration Test: Check Routing', async t => {
  t.plan(4)

  try {

    await createDom()
    const store = configureStore(createInitialAppState())
    const browserHistory = createMemoryHistory('/')
    const history = syncHistoryWithStore(browserHistory, store)

    // At load time React determines if it can use DOM, and stores it as a boolean
    // If react is included before JSDOM, we got 'dangerouslyReplaceNodeWithMarkup...' when Component render
    // function returns different type of root element
    // Solutions:
    // 1. use manual patch : require('fbjs/lib/ExecutionEnvironment').canUseDOM = true
    // 2. Or ensure that you don't load React before you set up JSDOM, which is the only way I'm positive about,
    //   but it's also the most difficult and bug prone.

    require('fbjs/lib/ExecutionEnvironment').canUseDOM = true

    const wrapper = mount(
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={GifSearchEngineContainer}/>
          <Route path="favorites" component={Favorites}/>
        </Router>
      </Provider>)


    let gifEngineView = wrapper.find(GifSearchEngineContainer)
    let favoritesView = wrapper.find(Favorites)

    t.equal(gifEngineView.length, 1, 'should render GifSearchEngine View')
    t.equal(favoritesView.length, 0, 'should NOT render Favorites View')

    const element = wrapper.find('a')
    // see https://github.com/airbnb/enzyme/issues/516
    element.simulate('click', {button: 0})

    gifEngineView = wrapper.find(GifSearchEngineContainer)
    favoritesView = wrapper.find(Favorites)

    t.equal(gifEngineView.length, 0, 'should NOT render GifSearchEngine View after click on \'Show Favorite\'')
    t.equal(favoritesView.length, 1, 'should render Favorites View after click on \'Show Favorite\'')


  } catch (e) {
    console.log(e.stack)
    t.fail(e.message)
  }
})