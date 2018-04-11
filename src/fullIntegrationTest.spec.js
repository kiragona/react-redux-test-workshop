'use strict'

import React from 'react'
import test from 'tape'

import {Provider} from 'react-redux'

import {createDom} from '../test/utils'

import ReactDOM from 'react-dom'

import {gif1, gifsList} from '../test/mocks/dataMocks'


import configureStore from '../src/gif-search-app/store/configureStore'
import {syncHistoryWithStore} from 'react-router-redux'
import {createInitialAppState} from '../src/gif-search-app/store/rootReducer'

import GifSearchEngineContainer from '../src/gif-search-app/containers/GifsSearchEngineContainer'
import Favorites from '../src/gif-search-app/containers/FavoritesContainer'

import {Router, Route, createMemoryHistory} from 'react-router'


test('Full Integration Test: ', async t => {
  t.plan(12)
  let contentDiv = null
  try {
    await createDom()
    const docQuerySelector = document.querySelector.bind(document)
    const docQuerySelectorAll = document.querySelectorAll.bind(document)
    const REACT_MODAL_PORTAL = 'ReactModalPortal'

    const store = configureStore(createInitialAppState(gifsList))

    const browserHistory = createMemoryHistory('/')
    const history = syncHistoryWithStore(browserHistory, store)

    // add content div to body
    const bodyElement = docQuerySelector('body')
    contentDiv = window.document.createElement('div')
    bodyElement.appendChild(contentDiv)

    require('fbjs/lib/ExecutionEnvironment').canUseDOM = true

    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={GifSearchEngineContainer}/>
          <Route path="favorites" component={Favorites}/>
        </Router>
      </Provider>, contentDiv)

    //console.log(document.body.innerHTML)

    t.equal(docQuerySelector('.gif-list').children.length, 3, '3 gifs are displayed ')

    t.pass('• go to show favorites')

    let favoritesLinkElement = docQuerySelector('.showFavorites')
    favoritesLinkElement.click()

    t.equal(docQuerySelector('.gif-list').children.length, 0, 'favorite list is empty')

    t.pass('• click on Back Link')

    docQuerySelector('.back').click()
    // console.log(document.body.innerHTML)

    t.pass('• click on first gif to open modal dialog')
    const selectedGif = docQuerySelectorAll('.gif-item')[0]
    selectedGif.click()

    let modalPortal = docQuerySelector(`.${REACT_MODAL_PORTAL}`)
    t.equal(modalPortal.children.length, 1, 'should render modal dialog with content ')

    t.pass('• set selected gif in modal as favorite')
    docQuerySelector('.star').click()

    t.equal(docQuerySelector('.star-favorite').className, 'star-favorite', 'should render favorite start ')

    t.pass('• close Modal Dialog')
    const closeButton = docQuerySelector('button')
    closeButton.click()

    modalPortal = docQuerySelector(`.${REACT_MODAL_PORTAL}`)

    t.equal(modalPortal, null, 'modal dialog should not be rendered after close')

    t.pass('• go to show favorites')

    favoritesLinkElement = docQuerySelector('.showFavorites')
    favoritesLinkElement.click()
    t.equal(docQuerySelector('.gif-list').children.length, 1, 'favorite list has a one gif ')

    // console.log(document.body.innerHTML)


  } catch (e) {
    console.log(e.stack)
    t.fail(e.message)
    t.end()
  } finally {
    ReactDOM.unmountComponentAtNode(contentDiv)
  }
})