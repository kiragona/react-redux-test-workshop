import test from 'tape'
import {createDom} from '../../../test/utils'
import nock from 'nock'
import {requestGifs, receiveGifs, failedReceiveGifs} from './gifsActions'
// redux stuff
import thunk from 'redux-thunk'
import initialAppState from '../store/rootReducer'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


test('Test requestGifs ASYNC action: success path', async t => {
  t.plan(1)
  let nockScope = null
  try {

    await createDom()

    const expectedActions = [receiveGifs({data: []})]

    //create mocked store to dispatch action
    const store = mockStore(initialAppState)
    // mock http request
    nockScope = nock('http://api.giphy.com')
      .get('/v1/gifs/search')
      .query(true)
      .reply(200, {data: {data: []}})

    store.dispatch(requestGifs('aaa'))
      .then(() => {
        nock.removeInterceptor(nockScope)
        let actions = store.getActions()
        t.deepEquals(actions, expectedActions, 'should invoke receiveGifs action on success')
      })
  } catch (e) {
    nock.removeInterceptor(nockScope)
    console.log(e.stack)
    t.fail(e.message)
  }
})


test('Test requestGifs ASYNC action: failure path', async t => {
  t.plan(1)
  let nockScope = null
  try {

    await createDom()

    const store = mockStore(initialAppState)
    // mock failure fetch request
    nockScope = nock('http://api.giphy.com')
      .get('/v1/gifs/search')
      .query(true)
      .reply(500)

    const expectedActions = [failedReceiveGifs('error: failed to retrieve gifs', 500), receiveGifs([])]

    store.dispatch(requestGifs('aaa'))
      .then(() => {
        nock.removeInterceptor(nockScope)
        t.deepEquals(store.getActions(), expectedActions, 'should invoke failedReceiveGifs on failure')
      })
  } catch (e) {
    nock.removeInterceptor(nockScope)
    t.fail(e.message)
  }
})