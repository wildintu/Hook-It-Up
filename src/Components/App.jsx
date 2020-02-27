import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import DetailsSingle from "./DetailsSingle";

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className="navbar pt-3 pb-3 sticky-top bg-dark">
          <Link to="/" className="btn btn-success">
            Home
          </Link>
        </div>
        <Switch>
          <Route exact path="/:id/details" component={DetailsSingle} />
          <Route path="/" component={Home} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
