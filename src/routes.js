import React from 'react';
import {Route} from 'react-router';

import Main from 'components/main';
import Login from 'components/login';
import Home from 'components/home';

const routes = (
  <Route handler={Main}>
    <Route name='login' handler={Login}/>
    <Route name='home' handler={Home}/>
  </Route>
);

export default routes;
