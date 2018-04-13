import {mount} from 'enzyme'
import React from 'react'
import test from 'tape'
import {Provider} from 'react-redux'
import configureStore from '../store/configureStore'
import {favoritesMap} from '../../../test/mocks/dataMocks'
import {createInitialAppState} from '../store/rootReducer'
import FavoritesContainer from './FavoritesContainer'

import {createDom} from '../../../test/utils'

test('FavoritesContainer: test connection to Redux store', t => {
    t.plan(1)
    try {

      const store = configureStore(createInitialAppState(null, favoritesMap))

      createDom()
      const wrapper = mount(
        <Provider store={store}>
          <FavoritesContainer store={store}/>
        </Provider>
      )
      t.equal(wrapper.find('.gif-item').length, 2, 'should render 2 gifs')

    } catch (e) {
      t.fail(e.message)
    }
  }
)

