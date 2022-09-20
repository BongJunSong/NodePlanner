import React from 'react';
import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const Login = loadable(() => import('@pages/Login'));
const Main = loadable(() => import('@layouts/Main'));

// const Signup = loadable(() => import('@pages/Signup'));

const App = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route path="/login" component={Login} />
    {/* <Route path="/signup" component={Signup} /> */}
    <Route path="/main" component={Main} />
  </Switch>
);

export default App;
