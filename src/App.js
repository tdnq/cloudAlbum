import React from 'react';
import Login from "./pages/home/login/index.js";
import BasicLayout from "./layouts/BasicLayout.js";
import Album from "./pages/home/album/index.js";
import Logup from './pages/home/logup/index.js';
import AlbumDetail from "./pages/home/albumDetail/index.js";
import AdminLayout from "./layouts/adminLayout.js";
import AdminLogin from "./pages/admin/login/index.js";
import ReviewPhoto from "./pages/admin/reviewPhoto/index.js";
import AdminUser from "./pages/admin/user/index.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/" exact>
        <BasicLayout navKey="3">
          <Login />
        </BasicLayout>
      </Route>
      <Route path="/album" >
        <BasicLayout navKey="1">

          <Album />
        </BasicLayout>
      </Route>
      <Route path="/logup">
        <BasicLayout navKey="4">
          <Logup />
        </BasicLayout>
      </Route>
      <Route path="/login">
        <BasicLayout navKey="3">

          <Login />
        </BasicLayout>
      </Route>

      <Route path="/albumDetail">
        <Route path="/albumDetail/:album">
          <BasicLayout navKey="1">

            <AlbumDetail />
          </BasicLayout>
        </Route>
      </Route>
      {/* 后台管理 */}
      <Switch>
        <Route path="/admin/login">
            <AdminLogin />
        </Route>
        <Route path="/admin/reviewPhoto">
          <AdminLayout>
            <ReviewPhoto/>
          </AdminLayout>
        </Route>
        <Route path="/admin/user">
          <AdminLayout>
            <AdminUser/>
          </AdminLayout>
        </Route>
      </Switch>
    </Router >
  )
}

export default App;
