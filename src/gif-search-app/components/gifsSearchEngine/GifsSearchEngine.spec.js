import React, {Component} from 'react'
import SearchBar from '../searchBar/SearchBar'
import GifList from '../gifList/GifList'
import GifModal from '../gifModal/GifModal'
import {Link} from 'react-router'
import {shallow} from 'enzyme';
import {favoritesMap, gif1, gifsList} from '../../../../test/mocks/dataMocks'
import test from 'tape'
import sinon from 'sinon'

import GifsSearchEngine from './GifsSearchEngine'


test('GifsSearchEngine: rendering', t => {
  t.plan(6)
  try {

    const props = {
      selectedGif: gif1,
      favoriteGifIdsMap: favoritesMap,
      gifs: gifsList
    }
    const wrapper = shallow(<GifsSearchEngine {...props}/>)

    t.equal(wrapper.find('.app').length, 1, 'should render one Favorites component')
    t.equal(wrapper.find('.appTitle').text(), 'Gifs Search Engine', 'should render correct Favorites title component')
    t.equal(wrapper.find(SearchBar).length, 1, 'should render one SearchBar component')
    t.equal(wrapper.find(GifList).length, 1, 'should render one GifList component')
    t.equal(wrapper.find(GifModal).length, 1, 'should render one GifModal component')
    t.equal(wrapper.find(Link).length, 1, 'should render one Link component')

  } catch (e) {
    t.fail(e.message)

  }
})

test('GifsSearchEngine: test CBs invocation', t => {
  t.plan(3)
  try {

    const props = {
      selectedGif: gif1,
      favoriteGifIdsMap: favoritesMap,
      gifs: gifsList,
      modalIsOpen: false,
      closeModal: sinon.spy(),
      setFavoriteGif: sinon.spy(),
      requestGifs: sinon.spy(),
      openModal: sinon.spy(),

    }
    const wrapper = shallow(<GifsSearchEngine {...props}/>)

    wrapper.find(SearchBar).prop('onTermChange')()
    t.ok(props.requestGifs.called, 'requestGifs was called onTermChange in SearchBar')

    wrapper.find(GifList).prop('onGifSelect')()
    t.ok(props.openModal.called, 'openModal was called onGifSelect in GifList')


    wrapper.find(GifModal).prop('onRequestClose')()
    t.ok(props.closeModal.called, 'closeModal was called onRequestClose in GifModal')

  } catch (e) {
    t.fail(e.message)

  }
})


test('GifsSearchEngine: test isFavoriteGif method', t => {
    t.plan(2)
    try {

      const props = {
        selectedGif: gif1,
        favoriteGifIdsMap: favoritesMap,
        gifs: gifsList,
        modalIsOpen: false
      }

      const wrapper = shallow(<GifsSearchEngine {...props}/>)
      let res = wrapper.instance().isFavoriteGif(null, null)
      t.ok(!res, 'isFavoriteGif return correct output, with no selected gif is provided')
      res = wrapper.instance().isFavoriteGif(gif1, favoritesMap)
      t.ok(res, 'isFavoriteGif return correct output, with selected gif is provided')
    } catch
      (e) {
      console.log(e.stack)
      t.fail(e.message)

    }
  }
)

test('GifsSearchEngine: test onCloseModal and handleGifSelection methods', t => {
  t.plan(2)
  try {

    const wrapper = shallow(<GifsSearchEngine selectedGif={gif1}/>)
    wrapper.instance().onCloseModal()
    t.pass('onCloseModal works properly when no closeModal CB is provided')

    wrapper.instance().handleGifSelection()
    t.pass('handleGifSelection works properly when no openModal CB is provided')

  } catch (e) {
    t.fail(e.message)

  }
})