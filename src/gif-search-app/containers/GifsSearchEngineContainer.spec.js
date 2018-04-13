import {mount} from 'enzyme'
import React from 'react'
import test from 'tape'
import {Provider} from 'react-redux'
import {createDom} from '../../../test/utils'
import configureStore from '../store/configureStore'
import {gifsList} from '../../../test/mocks/dataMocks'
import {createInitialAppState} from '../store/rootReducer'
import GifsSearchEngineContainer from './GifsSearchEngineContainer'

test('GifsSearchEngineContainer: connect to Redux store', t => {
    t.plan(1)
    try {

      createDom()
      const store = configureStore(createInitialAppState(gifsList))
      const wrapper = mount(
        <Provider store={store}>
          <GifsSearchEngineContainer store={store}/>
        </Provider>
      )
      t.equal(wrapper.find('.gif-item').length, 3, 'should render 3 gifs')

    } catch (e) {
      t.fail(e.message)

    }
  }
)