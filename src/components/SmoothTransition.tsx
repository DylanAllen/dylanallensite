import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { RouteContext } from "../utils/routeContext";
import Picture from "./Picture";

export default function SmoothTransition() {
  const { activePost, setActivePost } = useContext(RouteContext);
  const history = useHistory();

  useEffect(() => {
    if (activePost) {
      window.scroll({
        top: 0,
        left: 0,
      });
      setTimeout(() => {
        history.push(`/blog/${activePost?.slug}`);
        setActivePost(undefined);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePost]);

  return (
    <>
      {activePost && (
        <motion.div
          className="transition-screen"
          animate={{ backgroundColor: "#e9e9e9" }}
          exit={{ backgroundColor: "transparent" }}
        >
          <motion.h1
            layoutId={`title-${activePost.slug}`}
            className="transition-title"
            transition={{ duration: 0.5 }}
          >
            {activePost.title}
          </motion.h1>
          <Picture
            className="transition-image"
            src={activePost.image}
            style={{ width: "100%", height: "45vw", maxHeight: "700px" }}
            overlayed={true}
            layoutId={`post-${activePost.slug}`}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}
    </>
  );
}
