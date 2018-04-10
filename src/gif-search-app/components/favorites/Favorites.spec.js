import test from 'tape'
import {shallow, mount} from 'enzyme'
import React from 'react'
import sinon from 'sinon'

import {createDom} from '../../../../test/utils'
import {gif1, favoritesMap} from '../../../../test/mocks/dataMocks'


import GifList from '../gifList/GifList'
import GifModal from '../gifModal/GifModal'
import {Link} from 'react-router'


import Favorites from './Favorites'


test.only('Favorites: rendering', t => {
  t.plan(1)
  try {
    t.ok(true, 'dummy test ok')
  } catch (e) {
    t.fail(e.message)
  }
})

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

test('Favorites: test provided CBs invocation', t => {
  t.plan(2)
  try {

    const props = {
      selectedGif: selectedGif,
      favoriteGifIdsMap: favoritesMap,
      actions: {
        closeModal: sinon.spy(),
        setFavoriteGif: sinon.spy(),
        openModal: sinon.spy(),
      }
    }
    const wrapper = shallow(<Favorites {...props}/>)


    wrapper.find(GifList).prop('onGifSelect')()
    t.ok(props.actions.openModal.called, 'open modal was invoked from GifList on select gif')
    wrapper.find(GifModal).prop('onRequestClose')()
    t.ok(props.actions.closeModal.called, 'close modal was invoked from GifModal')

  } catch (e) {
    t.fail(e.message)

  }
})

test('Favorites: test isFavoriteGif method', async t => {
    t.plan(2)
    try {

      const props = {
        selectedGif: selectedGif,
        favoriteGifIdsMap: favoritesMap,
        actions: {
          closeModal: sinon.spy(),
          setFavoriteGif: sinon.spy(),
          openModal: sinon.spy(),
        }
      }

      await createDom()
      const wrapper = mount(<Favorites {...props}/>)

      let res = wrapper.instance().isFavoriteGif(null, favoritesMap)
      t.ok(!res, 'isFavoriteGif return correct output, with no selected gif is provided')
      res = wrapper.instance().isFavoriteGif(selectedGif, favoritesMap)
      t.ok(res, 'isFavoriteGif return correct output,  with selected gif is provided')
    } catch
      (e) {
      console.log(e.stack)
      t.fail(e.message)
    }
  }
)