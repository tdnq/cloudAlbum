import React from 'react';
import './App.css';
import  Login from "./pages/home/login/index.js";
import BasicLayout from "./layouts/BasicLayout.js";
import Album from "./pages/home/album/index.js";
import Logup from './pages/home/logup/index.js';
import AlbumDetail from "./pages/home/albumDetail/index.js";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/" exact>
        <BasicLayout>
          <Album/>
        </BasicLayout>
      </Route>
      <Route path="/album">
        <BasicLayout>
          <Album/>
        </BasicLayout>
      </Route>
      <Route path="/logup">
        <BasicLayout>
          <Logup/>
        </BasicLayout>
      </Route>
      <Route path="/login">
        <BasicLayout>
          <Login/>
        </BasicLayout>
      </Route>
      <Route path="/albumDetail">
        <BasicLayout>
          <AlbumDetail/>
        </BasicLayout>
      </Route>
    </Router>
  )
}

export default App;
