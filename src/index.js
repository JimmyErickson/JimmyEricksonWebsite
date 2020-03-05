import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";

import Portfolio from "views/examples/Portfolio.js";
import ContactForm from "./ContactForm";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/portfolio" render={props => <Portfolio {...props} />} />
        <Route path="/contactForm" render={props => <ContactForm {...props} />} />
        <Redirect to="/portfolio" />
        <Redirect from="/" to="/portfolio" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
