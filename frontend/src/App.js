import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { Provider } from "react-redux";
import store from "store";
import { css } from "styled-components/macro"; //eslint-disable-line
import ForgetPassword from "pages/ForgetPassword";
import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {

  return (
    
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/components/:type/:subtype/:name">
            <ComponentRenderer />
          </Route>
          <Route path="/components/:type/:name">
            <ComponentRenderer />
          </Route>
          <Route path="/ForgetPassword">
            <ForgetPassword />
          </Route>
          <Route path="/">
            <MainLandingPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
    
  );
}
