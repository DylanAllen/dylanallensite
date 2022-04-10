import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
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

function Blog() {
  return (
    <Routes>
      <Route path="/noiiice" element={<Noiiice />} />
      <Route path="/newsite" element={<NewSite />} />
      <Route path="/moov" element={<Moov />} />
      <Route path="/udon" element={<UdonOne />} />
      <Route path="/accelerate-1" element={<Accelerate />} />
      <Route path="/book-reviews" element={<BookReviews />} />
      <Route path="/toast" element={<Toast />} />
      <Route path="/framer-motion" element={<FramerMotion />} />
      <Route path="/accelerate-2" element={<Accelerate2 />} />
      <Route path="/" element={<BlogPage />} />
    </Routes>
  );
};

export default Blog;
