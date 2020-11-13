import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Trending from '../pages/Trending';
import Explorer from '../pages/Explorer';
import Repository from '../pages/Repository';
import Profile from '../pages/Profile';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Trending} />
    <Route path="/explorer" component={Explorer} />
    <Route path="/repository/:reponame+" component={Repository} />
    <Route path="/profile" component={Profile} />
  </Switch>
);

export default Routes;

