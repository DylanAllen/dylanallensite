import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/about";
import AdminPage from "./pages/admin";
import Blog from "./pages/blog";
import IndexPage from "./pages/index";
import Leyla from "./pages/leyla";
import Resume from "./pages/resume";

const routeAnimate = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Routes() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence>
        <Switch>
          <RouteWrapper path="/blog" Component={Blog} />
          <RouteWrapper path="/about" Component={AboutPage} />
          <RouteWrapper path="/resume" Component={Resume} />
          <RouteWrapper path="/leyla" Component={Leyla} />
          <RouteWrapper path="/admin" Component={AdminPage} />
          <RouteWrapper path="/" Component={IndexPage} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

const RouteWrapper = ({
  path,
  Component,
}: {
  path: string;
  Component: React.ComponentType<any>;
}) => {
  return (
    <Route path={path}>
      <motion.div
        key={path}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={routeAnimate}
      >
        <Component />
      </motion.div>
    </Route>
  );
};
