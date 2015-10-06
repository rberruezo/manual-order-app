import React from 'react';
import {Route} from 'react-router';

import Main from 'components/main';
import Login from 'components/login';

const routes = (
  <Route handler={Main}>
    <Route name='login' handler={Login}/>
  </Route>
);

export default routes;
