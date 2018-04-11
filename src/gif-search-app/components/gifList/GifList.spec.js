import {shallow} from 'enzyme'
import React from 'react'
import test from 'tape'

import GifList from './GifList'
import GifItem from './GifItem'
import {gifsList} from '../../../../test/mocks/dataMocks'

test('GifList: rendering', t => {
  t.plan(1)
  try {
    const wrapper = shallow(<GifList gifs={gifsList}/>)
    t.equals(wrapper.find(GifItem).length, 3, 'should render 3 GifItem inside')
  } catch
    (e) {
    t.fail(e.message)
  }
})
