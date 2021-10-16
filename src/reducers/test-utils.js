import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
// Import your own reducer
import { initState as userInitState } from './userReducer';
import { initState as authInitState } from './authReducer';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

function render(
      ui,
      {
            initialState,
            store = mockStore({
                  user: userInitState,
                  auth: authInitState,
                  ...initialState
            }),
            ...renderOptions
      } = {}
) {
      function Wrapper({ children }) {
            return <Provider store={store}>
                  <I18nextProvider i18n={i18n}>
                        {children}
                  </I18nextProvider>
            </Provider>
      }
      return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }