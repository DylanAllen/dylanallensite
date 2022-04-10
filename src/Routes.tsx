import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SmoothTransition from "./components/SmoothTransition";
import { MetaType } from "./interfaces";
import AboutPage from "./pages/about";
import AdminPage from "./pages/admin";
import Blog from "./pages/blog";
import IndexPage from "./pages/index";
import Leyla from "./pages/leyla";
import Resume from "./pages/resume";
import { RouteContext } from "./utils/routeContext";

const routeAnimate = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Routes() {
  const [activePost, setActivePost] = useState<MetaType>();

  return (
    <Router>
      <ScrollToTop />
        <RouteContext.Provider value={{ activePost, setActivePost }}>
          <Switch>
            <Route path="/blog/*" element={<RouteWrapper path="blog" Component={Blog} />} />
            <Route path="/about" element={<RouteWrapper path="about" Component={AboutPage} />} />
            <Route path="/resume" element={<RouteWrapper path="resume" Component={Resume} />} />
            <Route path="/leyla" element={<RouteWrapper path="leyla" Component={Leyla} />} />
            <Route path="/admin" element={<RouteWrapper path="admin" Component={AdminPage} />} />
            <Route path="/" element={<RouteWrapper path="/" Component={IndexPage} />} />
          </Switch>
          <SmoothTransition />
        </RouteContext.Provider>
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
    <motion.div
      key={path}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={routeAnimate}
    >
      <Component />
    </motion.div>
  );
};

