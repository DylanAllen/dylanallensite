import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import NewSite from "./newsite";
import Moov from "./moov";
import Noiiice from "./noiiice";
import UdonOne from "./udon";
import Accelerate from "./accelerate-1";
import Accelerate2 from "./accelerate-2";
import BookReviews from "./book-reviews";
import BlogPage from './blog';
import Toast from "./toast";
import FramerMotion from "./framer-motion";

const Blog: React.FunctionComponent<{ state: any }> = () => {
  return (
    <Switch>
      <Route path="/blog/noiiice" component={Noiiice} />
      <Route path="/blog/newsite" component={NewSite} />
      <Route path="/blog/moov" component={Moov} />
      <Route path="/blog/udon" component={UdonOne} />
      <Route path="/blog/accelerate-1" component={Accelerate} />
      <Route path="/blog/book-reviews" component={BookReviews} />
      <Route path="/blog/toast" component={Toast} />
      <Route path="/blog/framer-motion" component={FramerMotion} />
      <Route path="/blog/accelerate-2" component={Accelerate2} />
      <Route path="/blog" component={BlogPage} />
    </Switch>
  );
};

export default Blog;
