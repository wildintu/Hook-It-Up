import React, { useState, useEffect, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import Details from './Details';

const App = () => {
    const[count, setCount] = useState(0);

    return(
        <Router>
        <Fragment>
          <div className="navbar pt-3 pb-3 sticky-top bg-dark">
          <Link to="/" className="btn btn-success">Home</Link> 
          <Link to="/:id/details" className="btn btn-danger">Details</Link>
          </div>
          <Switch>
            <Route exact path="/:id/details" component={Details} />
            <Route path="/" component={Home} />
          </Switch>
        </Fragment>
      </Router>
    )
}

export default App;