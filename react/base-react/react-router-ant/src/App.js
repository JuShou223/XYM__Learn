import React from 'react';
import 'antd/dist/antd.css'

import { BrowserRouter as Router,Route} from 'react-router-dom';
import Layout from './page/Layout'
// import './App.css';
function App() {
  return (
    <Router>
      <Route path="/" component={Layout}></Route>
    </Router>
  );
}

export default App;
