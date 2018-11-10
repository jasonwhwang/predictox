import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Rightbar from './Rightbar/Rightbar';
import Home from './Home/Home';
import Leaderboard from './Leaderboard/Leaderboard';
import Account from './Account/Account';
import Trending from './Trending/Trending';
import About from './About/About';

class App extends Component {
  render() {
    return (
      <div className="root-app">
        <Header />
        <Sidebar />
        <Rightbar />
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route path="/trending" component={Trending} />
          <Route path ="/leaderboard" component={Leaderboard} />
          <Route path ="/about" component={About} />
          <Route path ="/account" component ={Account} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;