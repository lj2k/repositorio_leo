import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Switch, HashRouter, Route } from "react-router-dom";

const routing = (
  <HashRouter>
    <Switch>
      <Route exact path="./components/booking" component={"Booking"} />
    </Switch>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
