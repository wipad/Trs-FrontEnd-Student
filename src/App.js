import React from 'react';
import {
      Switch,
      Route
} from "react-router-dom";
import {
      useSelector,
      // useDispatch
} from 'react-redux';
import HeaderAppBar from './components/HeaderAppBar';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import NoMatch from './views/NoMatch';
import PrivateView from './views/PrivateView';

function App() {
      const fakeAuth = useSelector(state => state.auth);
      const user = useSelector(state => state.user);
      return (

            <HeaderAppBar>
                  {fakeAuth.isAuthenticated ? (
                        <PrivateView></PrivateView>
                  ) : (
                        <Switch>

                              <Route exact={true} path="/">
                                    <HomeView />
                              </Route>
                              <Route path="/login">
                                    <LoginView />
                              </Route>
                              <Route path="/register">
                                    <RegisterView />
                              </Route>
                              <Route path="*">
                                    <NoMatch />
                              </Route>
                        </Switch>
                  )}

            </HeaderAppBar>
      );
}

export default App;