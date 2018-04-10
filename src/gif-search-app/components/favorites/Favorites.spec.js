import test from 'tape'
import {shallow} from 'enzyme'
import React from 'react'
import sinon from 'sinon'

import '../../../../test/utils'
import {gif1, gif3, favoritesMap} from '../../../../test/mocks/dataMocks'


import GifList from '../gifList/GifList'
import GifModal from '../gifModal/GifModal'
import {Link} from 'react-router'


import Favorites from './Favorites'


test('Favorites: rendering', t => {
  t.plan(5)
  try {

    const wrapper = shallow(<Favorites selectedGif={gif1}/>)

    t.equal(wrapper.find('.app').length, 1, 'should render one Favorites component')
    t.equal(wrapper.find('.appTitle').text(), 'My Favorites Gifs', 'should render correct Favorites title component')
    t.equal(wrapper.find(GifList).length, 1, 'should render one GifList component')
    t.equal(wrapper.find(GifModal).length, 1, 'should render one GifModal component')
    t.equal(wrapper.find(Link).length, 1, 'should render one Link component')

  } catch (e) {
    t.fail(e.message)

  }
})

test('Favorites: test openModal CB invocation', t => {
  t.plan(1)
  try {

    const props = {
      selectedGif: gif1,
      favoriteGifIdsMap: favoritesMap,
      openModal: sinon.spy()

    }
    const wrapper = shallow(<Favorites {...props}/>)

    //check openModal invocation
    wrapper.find(GifList).prop('onGifSelect')()
    t.ok(props.openModal.calledOnce, 'open modal was invoked from GifList on select gif')


  } catch (e) {
    t.fail(e.message)

  }
})

test('Favorites: test closeModal CB invocation', t => {
  t.plan(1)
  try {

    const props = {
      selectedGif: gif1,
      favoriteGifIdsMap: favoritesMap,
      closeModal: sinon.spy()

    }
    const wrapper = shallow(<Favorites {...props}/>)

    //check close modal invocation
    wrapper.find(GifModal).prop('onRequestClose')()
    t.ok(props.closeModal.calledOnce, 'close modal was invoked from GifModal')

  } catch (e) {
    t.fail(e.message)

  }
})

test('Favorites: test isFavoriteGif method', t => {
    t.plan(3)
    try {

      const props = {
        selectedGif: gif1,
        favoriteGifIdsMap: favoritesMap,
        setFavoriteGif: sinon.spy()
      }

      const wrapper = shallow(<Favorites {...props}/>)

      let res = wrapper.instance().isFavoriteGif(null, favoritesMap)
      t.ok(!res, 'isFavoriteGif return correct output for null input as selected gif')

      res = wrapper.instance().isFavoriteGif(gif3, favoritesMap)
      t.ok(!res, 'isFavoriteGif return correct output for not favorite gif')

      res = wrapper.instance().isFavoriteGif(gif1, favoritesMap)
      t.ok(res, 'isFavoriteGif return correct output for favorite gif')
    } catch
      (e) {
      console.log(e.stack)
      t.fail(e.message)
    }
  }
)

test('Favorites: test handleGifSelection method', t => {
    t.plan(2)
    try {

      let wrapper = shallow(<Favorites />)
      wrapper.instance().handleGifSelection(gif1)
      t.pass('handleGifSelection works properly when no openModal CB is provided')

      const props = {
        selectedGif: gif1,
        favoriteGifIdsMap: favoritesMap,
        openModal: sinon.spy()
      }

      wrapper = shallow(<Favorites {...props}/>)
      wrapper.instance().handleGifSelection(gif1)
      t.ok(props.openModal.calledOnce, 'handleGifSelection works properly when openModal CB is provided')


    } catch
      (e) {
      console.log(e.stack)
      t.fail(e.message)
    }
  }
)

test('Favorites: test onCloseModal method', t => {
    t.plan(2)
    try {

      let wrapper = shallow(<Favorites />)
      wrapper.instance().onCloseModal(gif1)
      t.pass('onCloseModal works properly when no closeModal CB is provided')

      const props = {
        selectedGif: gif1,
        favoriteGifIdsMap: favoritesMap,
        closeModal: sinon.spy()
      }

      wrapper = shallow(<Favorites {...props}/>)
      wrapper.instance().onCloseModal(gif1)
      t.ok(props.closeModal.calledOnce, 'handleGifSelection works properly when closeModal CB is provided')


    } catch
      (e) {
      console.log(e.stack)
      t.fail(e.message)
    }
  }
)