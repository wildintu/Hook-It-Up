import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import DetailsSingle from './DetailsSingle'

const App = () => {

    return(
        <Router>
        <Fragment>
          <div className="navbar pt-3 pb-3 sticky-top bg-dark">
          <Link to="/" className="btn btn-success">Home</Link> 
          <Link to="/:id/details" className="btn btn-danger">Details</Link>
          </div>
          <Switch>
            <Route exact path="/:id/details/" component={Details} />
            <Route exact path="/:id/details/:id" component={DetailsSingle} />
            <Route path="/" component={Home} />
          </Switch>
        </Fragment>
      </Router>
    )
}

export default App;