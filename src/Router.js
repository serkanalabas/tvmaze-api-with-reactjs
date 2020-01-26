import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Pages/Home/Home.js';
import About from './Pages/About/About.js';
import TvShowDetail from './Pages/TvShowDetail/TvShowDetail.js';

export default () => {
  return (
    <Router>
         {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/home">
				<Home />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/shows/:tvShowId/:tvShowName" render={({ match }) => <TvShowDetail tvShowId={match.params.tvShowId} />} />
        </Switch>
    </Router>
  );
}

