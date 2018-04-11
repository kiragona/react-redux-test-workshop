import test from 'tape'
import {shallow} from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import {gif1} from '../../../../test/mocks/dataMocks'

import Modal from 'react-modal'
import FavoriteStar from './../favorites/FavoriteStar'
import GifModal from './GifModal'


test('GifModal: rendering react modal', t => {
  t.plan(5)
  try {

    const props = {
      selectedGif: gif1,
      isFavorite: true,
      modalIsOpen: false
    }

    const wrapper = shallow(<GifModal {...props}/>)
    t.equal(wrapper.find(Modal).length, 1, 'should render one rect-Modal component')
    t.equal(wrapper.find(FavoriteStar).length, 1, 'should render FavoriteStar')
    t.ok(wrapper.find(FavoriteStar).prop('isFavorite'), 'FavoriteStart got correct properies')
    t.equal(wrapper.find('img').length, 1, 'should render one img')
    t.equal(wrapper.find('img').prop('src'), 'fakeOriginalUrl1', 'should render img with src of gif')


  } catch (e) {
    t.fail(e.message)

  }
})

test('GifModal: rendering fallback, when no selectedGif provided', t => {
  t.plan(1)
  try {

    const wrapper = shallow(<GifModal/>)
    t.equal(wrapper.find(Modal).length, 0, 'should not render rect-Modal component without selectedGif')


  } catch (e) {
    t.fail(e.message)
    t.end()
  }
})

test('GifModal: check CBs invocation', t => {
  t.plan(2)
  try {

    const props = {
      selectedGif: gif1,
      isFavorite: true,
      setFavoriteGif: sinon.spy(),
      onRequestClose: sinon.spy(),
      modalIsOpen: true
    }

    const wrapper = shallow(<GifModal {...props}/>)
    wrapper.find(FavoriteStar).prop('onFavoriteChange')()
    t.ok(props.setFavoriteGif.calledOnce, 'setFavoriteGif was called onFavoriteChange of FavoriteStar was invoked ')

    wrapper.find('button').simulate('click')
    t.ok(props.onRequestClose.calledOnce, 'onRequestClose was called onClick of close modal button ')

  } catch (e) {
    t.fail(e.message)

  }
})

test('GifModal: test handleFavorites', t => {
  t.plan(1)
  try {

    const wrapper = shallow(<GifModal selectedGif={gif1}/>)
    wrapper.instance().handleFavorites()
    t.pass('handleFavorites works properly when no setFavoriteGif CB is provided')

  } catch (e) {
    t.fail(e.message)

  }
})

test('GifModal: test handleCloseModal', t => {
  t.plan(1)
  try {

    const wrapper = shallow(<GifModal selectedGif={gif1}/>)
    wrapper.instance().handleCloseModal()
    t.pass('handleFavorites works properly when no onRequestClose CB is provided')

  } catch (e) {
    t.fail(e.message)

  }
})