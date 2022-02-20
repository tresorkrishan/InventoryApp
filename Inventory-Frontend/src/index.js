import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/admin/landingpage" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
