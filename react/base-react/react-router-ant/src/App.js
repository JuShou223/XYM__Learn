import React from 'react';
import 'antd/dist/antd.css'

import { BrowserRouter as Router,Route, Link, Redirect } from 'react-router-dom';
import Layout from './page/Layout'
// import './App.css';
function Table() {
  return (
    <div>
      Table
    </div>
  )
}
function Label() {
  return (
    <div>
      Label
    </div>
  )
}
function App() {
  return (
    <Router>
      <Route path="/" component={Layout}>
        <Route path="/" component={Layout}></Route>
        <Route path='/table' component={Table}></Route>
        <Route path='/label' component={Label}></Route>
      </Route>
    </Router>
  );
}

export default App;
