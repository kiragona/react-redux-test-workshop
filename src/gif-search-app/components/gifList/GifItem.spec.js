import test from 'tape'
import {shallow} from 'enzyme'
import GifItem from './GifItem'
import React from 'react'
import sinon from 'sinon'
import {gif1} from '../../../../test/mocks/dataMocks'


test('GifItem: rendering', t => {
  t.plan(1)
  try {

    const wrapper = shallow(<GifItem/>)
    const gifItemDiv = wrapper.find('.gif-item')
    t.equal(gifItemDiv.length, 1, 'GifItem was rendered')

  }catch (e) {
    t.fail(e.message)
  }
})

test('GifItem: rendering with invalid gif shape', t => {
  t.plan(1)
  try {

    const wrapper = shallow(<GifItem gif='aaa'/>)
    const gifItemDiv = wrapper.find('.gif-item')
    t.equal(gifItemDiv.length, 1, 'GifItem was rendered')

  } catch (e) {
    t.fail(e.message)
  }
})

test('GifItem: onGifSelect invocation', t => {
  t.plan(2)
  try {

    const onGifSelectSpy = sinon.spy()
    const wrapper = shallow(<GifItem onGifSelect={onGifSelectSpy} gif={gif1}/>)
    const gifItemDiv = wrapper.find('.gif-item')
    gifItemDiv.simulate('click')
    t.ok(onGifSelectSpy.calledOnce,  'onGifSelect was invoked on gif click')
    t.deepEqual(onGifSelectSpy.args[0][0], gif1, 'was called with expected arguments')


  }catch (e) {
    t.fail(e.message)
  }
})

test('GifItem: test selectGif method', t => {
  t.plan(1)
  try {


    const wrapper = shallow(<GifItem gif={gif1}/>)
    wrapper.instance().selectGif()
    t.pass( 'selectGif works correctly when no onGifSelect is provided')



  }catch (e) {
    t.fail(e.message)
  }
})


