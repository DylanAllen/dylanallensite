import { meta as Udon } from "../pages/blog/udon";
import { meta as Noiiice } from "../pages/blog/noiiice";
import { MetaType } from "../interfaces";
import Picture from "../components/Picture";
import { meta as NewSite } from "../pages/blog/newsite";
import { meta as Moov } from "../pages/blog/moov";
import { meta as Toast } from "../pages/blog/toast";
import { meta as BookReviews } from "../pages/blog/book-reviews";
import { meta as FramerMotion } from "../pages/blog/framer-motion";
import { meta as Accelerate1 } from "../pages/blog/accelerate-1";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useContext, useEffect, useState } from "react";
import { RouteContext } from "../utils/routeContext";
import { Button } from "grommet";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
  hidden: { opacity: 0, y: 20 },
};

let posts: MetaType[] = [
  FramerMotion,
  Accelerate1,
  BookReviews,
  Toast,
  Moov,
  NewSite,
  Noiiice,
  Udon,
];

interface PostsProps {
  imgHeight?: string;
  imgWidth?: string;
  className?: string;
}

interface PostProps {
  post: MetaType;
  imgHeight?: string;
  imgWidth?: string;
  className?: string;
  index: number;
}

const PostCard: React.FunctionComponent<PostProps> = ({
  post,
  imgHeight,
  imgWidth,
  index,
}) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);
  const { setActivePost } = useContext(RouteContext);

  const gotToPost = () => {
    setActivePost(post);
  };

  useEffect(() => {
    if (inView && !visible) {
      controls.start("visible");
      setVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.article
      variants={item}
      animate={controls}
      initial="hidden"
      className="post-summary"
      ref={ref}
    >
      <motion.h2
        tabIndex={7 + index}
        role="link"
        layoutId={`title-${post.slug}`}
        className="post-title"
        onClick={() => {
          gotToPost();
        }}
      >
        {post.title}
      </motion.h2>
      <div className="post-card">
        <p className="post-desc">{post.description}</p>
        <Picture
          className="post-image"
          src={post.image}
          style={{ height: imgHeight, width: imgWidth }}
          overlayed={true}
          onClick={() => {
            gotToPost();
          }}
          layoutId={`post-${post.slug}`}
        />
        <div className="post-floater"></div>
        <Button
          tabIndex={-1}
          onClick={() => setActivePost(post)}
          className="post-link"
        >
          View Post
        </Button>
        <div className="clear"></div>
      </div>
    </motion.article>
  );
};

const PostList: React.FunctionComponent<PostsProps> = ({
  imgHeight,
  imgWidth,
  className,
}) => {
  return (
    <motion.div
      className={"post-list " + className}
      variants={list}
      initial="hidden"
      animate="visible"
    >
      {posts.map((post, index) => (
        <PostCard
          index={index}
          post={post}
          key={post.slug}
          imgHeight={imgHeight ? imgHeight : "300px"}
          imgWidth={imgWidth ? imgWidth : "400px"}
        ></PostCard>
      ))}
    </motion.div>
  );
};

export default PostList;
