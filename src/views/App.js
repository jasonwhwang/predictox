import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Rightbar from './Rightbar/Rightbar';
import Home from './Home/Home';
import Users from './Users/Users';
import Account from './Account/Account';

class App extends Component {
  render() {
    return (
      <div className="root-app">
        <Header />
        <Sidebar />
        <Rightbar />
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route path ="/leaderboard" component={Users} />
          <Route path ="/account" component ={Account} />
        </Switch>
      </div>
    );
  }
}

export default App;