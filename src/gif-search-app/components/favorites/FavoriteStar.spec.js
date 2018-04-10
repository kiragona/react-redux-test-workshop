import test from 'tape'
import {shallow} from 'enzyme'
import FavoriteStar from './FavoriteStar'
import React from 'react'
import sinon from 'sinon'


test('FavoriteStar: rendering regular start',  t => {
  t.plan(1)
  try {
    const wrapper = shallow(<FavoriteStar/>)
    t.equals(wrapper.find('.star').length, 1, 'should render regular star')
  } catch (error) {
    t.fail(error.message)

  }
})

test('FavoriteStar: rendering favorite star',  t => {
  t.plan(1)
  try {
    const wrapper = shallow(<FavoriteStar isFavorite/>)
    t.equals(wrapper.find('.star-favorite').length, 1, 'should render favorite star')
  } catch (error) {
    t.fail(error.message)

  }
})

test('FavoriteStar: check onFavoriteChange CB invocation',  t => {
  t.plan(2)
  try {
    const onFavoriteChangeSpy = sinon.spy()
    const wrapper = shallow(<FavoriteStar onFavoriteChange={onFavoriteChangeSpy}/>)
    const mainDivElement = wrapper.find('.star')
    mainDivElement.simulate('click')
    t.ok(onFavoriteChangeSpy.calledOnce, 'onFavoriteChange was called once')
    t.equals(onFavoriteChangeSpy.args[0][0], true, 'onFavoriteChange was called with correct args')
  } catch (error) {
    t.fail(error.message)
  }
})

test('FavoriteStar: handleClick method',  t => {
  t.plan(1)
  try {
    const wrapper = shallow(<FavoriteStar />)
    wrapper.instance().handleClick()
    t.pass('handleClick method works properly when no onFavoriteChange CB is provided')
  } catch (error) {
    t.fail(error.message)
  }
})