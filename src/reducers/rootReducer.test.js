import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
import { initState as userInitState } from './userReducer';
import { initState as authInitState } from './authReducer';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
      // afterEach(() => {
      //       fetchMock.restore()
      // })

      it('creates redux store when fetching user and auth has been done', () => {
            // fetchMock.getOnce('user,auth', {
            //       body: {
            //             user: userInitState,
            //             auth: authInitState
            //       },
            //       headers: { 'content-type': 'application/json' }
            // });

            const store = mockStore({
                  user: userInitState,
                  auth: authInitState
            })

            expect(store.dispatch({ "type": "AUTHENTICATED", "payload": true })).toEqual({
                  "payload": true,
                  "type": "AUTHENTICATED"
            })

            expect(store.dispatch({ "type": "USER_ID", "payload": 1 })).toEqual({
                  "payload": 1,
                  "type": "USER_ID"
            })

            expect(store.dispatch({ "type": "USER_USERNAME", "payload": "MyUser" })).toEqual({
                  "payload":"MyUser",
                  "type": "USER_USERNAME"
            })

            expect(store.dispatch({ "type": "USER_EMAIL", "payload": "user@mail.com" })).toEqual({
                  "payload":"user@mail.com",
                  "type": "USER_EMAIL"
            })

            expect(store.dispatch({ "type": "USER_PASSWORD", "payload": "abc123" })).toEqual({
                  "payload":"abc123",
                  "type": "USER_PASSWORD"
            })


      })
})