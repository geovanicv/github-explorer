import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Explorer from '../pages/Explorer';
import Repository from '../pages/Repository';
import Profile from '../pages/Profile';

const Routes = () => (
  <Switch>
    <Route path="/explorer" component={Explorer} />
    <Route path="/repository/:reponame+" component={Repository} />
    <Route path="/profile/:login" component={Profile} />
  </Switch>
);

export default Routes;

