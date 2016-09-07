import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Photography from "./components/Photography";
import Contact from "./components/Contact";

ReactDOM.render((
  <Router history={browserHistory}>
    {/*<Favicon url={[url1, url2, url3]}/>*/}
      <Route path="/" component={Layout}>
        <IndexRoute component={Homepage}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/photography" component={Photography}/>
        <Route path="/contact" component={Contact}/>
      </Route>
  </Router>
), document.getElementById('app'));
