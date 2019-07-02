import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom";
import Recommand from './recommand/Recommand'
import Ranking from './ranking/Ranking'
import Search from './search/Search'
import './App.styl';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          header
        </header>
        <div className="music-tab">
          <div className="tab-item">
            <NavLink className="nav-link" to="/recommand"><span>推荐</span></NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/ranking"><span>排行榜</span></NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/search"><span>搜索</span></NavLink>
          </div>
        </div>
        <div className="music-view">
          {/* 路由 */}
          <Switch>
            <Route path="/recommand" component={Recommand}></Route>
            <Route path="/ranking" component={Ranking}></Route>
            <Route path="/search" component={Search}></Route>
            {/* <Route path="/" component={Recommand}></Route> */}
            <Redirect from="/" to="/recommand"></Redirect>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
