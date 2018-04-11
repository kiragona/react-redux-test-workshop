import test from 'tape'
import {shallow} from 'enzyme'
import React from 'react'
import sinon from 'sinon'

import SearchBar from './SearchBar'

test('SearchBar: rendering', t => {

  t.plan(2)
  try {

    const wrapper = shallow(<SearchBar/>)

    t.equal(wrapper.find('.search').length, 1, 'should render one Search Bar')
    const inputField = wrapper.find('input')
    t.equal(inputField.length, 1, 'should render one input field')

  } catch (error) {
    t.fail(error.message)

  }

})

test('SearchBar: test onChange event', t => {

  t.plan(3)
  try {

    const onTermChange = sinon.spy()
    const wrapper = shallow(<SearchBar onTermChange={onTermChange}/>)

    const inputField = wrapper.find('input')
    t.equal(inputField.length, 1, 'should render one input field')
    inputField.simulate('change', {target: {value: 'a'}})

    t.ok(onTermChange.calledOnce, 'onTermChange was called once')
    t.ok(onTermChange.args[0][0], 'onTermChange was invoked with correct arg')

  } catch (error) {
    t.fail(error.message)

  }

})