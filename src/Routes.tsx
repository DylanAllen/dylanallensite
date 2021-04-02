import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutPage from "./pages/about";
import Blog from "./pages/blog";
import IndexPage from './pages/index';
import Leyla from "./pages/leyla";
import Resume from "./pages/resume";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={AboutPage} />
        <Route path="/resume" component={Resume} />
        <Route path="/leyla" component={Leyla} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </Router>
  )
}