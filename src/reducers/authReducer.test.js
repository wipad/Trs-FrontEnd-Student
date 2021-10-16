import authReducer, { initState } from './authReducer';

describe('reducers', () => {
      describe('auth', () => {
            it('should provide the initial state', () => {
                  expect(authReducer(undefined, {})).toEqual({ ...initState })
            })

            it('should handle AUTHENTICATED action', () => {
                  expect(authReducer({ ...initState }, { type: 'AUTHENTICATED' })).toEqual({ ...initState, isAuthenticated: undefined })
            })
      })
})