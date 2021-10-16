import userReducer, { initState } from './userReducer';

describe('reducers', () => {
      describe('auth', () => {
            it('should provide the initial state', () => {
                  expect(userReducer(undefined, {})).toEqual({ ...initState })
            })

            it('should handle USER_ID action', () => {
                  expect(userReducer({ ...initState }, { type: 'USER_ID' })).toEqual({ ...initState, id: undefined })
            })

            it('should handle USER_USERNAME action', () => {
                  expect(userReducer({ ...initState }, { type: 'USER_USERNAME' })).toEqual({ ...initState, username: undefined })
            })

            it('should handle USER_EMAIL action', () => {
                  expect(userReducer({ ...initState }, { type: 'USER_EMAIL' })).toEqual({ ...initState, email: undefined })
            })

            it('should handle USER_PASSWORD action', () => {
                  expect(userReducer({ ...initState }, { type: 'USER_PASSWORD' })).toEqual({ ...initState, password: undefined })
            })
      })
})