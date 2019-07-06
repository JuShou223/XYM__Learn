import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
  Redirect, NavLink
} from 'react-router-dom';
import Recommend from './recommend/Recommend';
import Ranking from './ranking/Ranking';
import Search from './search/Search';
import './App.styl';
import '../assets/stylus/reset.styl'
import '../assets/stylus/font.styl'
import Player from '../containers/Player'
import logo from '../assets/imgs/logo.png'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <img className="app-logo" src={logo} width="100%" height="100%" alt=""/>
          <div className="app-title">
            芒果音乐
          </div>
        </header>
        <div className="music-tab">
          <div className="tab-item">
            <NavLink className="nav-link" to="/recommend">
              <span>推荐</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/ranking">
              <span>排行榜</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink className="nav-link" to="/search">
              <span>搜索</span>
            </NavLink>
          </div>
        </div>
        <div className="music-view">
          {/* 路由 */}
          <Switch>
            <Route path="/recommend" component={Recommend} />
            <Route path="/ranking" component={Ranking} />
            <Route path="/search" component={Search} />
            {/* <Route path="/" component={Recommend} /> */}
            <Redirect from="/" to="/recommend" />
          </Switch>
        </div>
        <Player></Player>
      </div>
    </Router>
  );
}

export default App;
