import Layout from "../components/Layout";
import PostList from "../components/PostList";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const titleVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
      ease: "easeOut",
      type: "spring",
      bounce: 0.5,
    },
  },
  hidden: { opacity: 0, y: -100 },
};

const IndexPage = () => {
  const getGreetingTime: () => string = () => {
    const dt = new Date();
    var hour = dt.getHours();
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
  };

  const rememberVisitor: () => boolean = () => {
    let visitor = localStorage.getItem("visitor");
    if (visitor) return true;
    localStorage.setItem("visitor", "true");
    return false;
  };

  const [greeting, setGreeting] = useState("");
  const [visitor, setVisitor] = useState<boolean | null>(null);

  useEffect(() => {
    setGreeting(getGreetingTime());
    setVisitor(rememberVisitor());
  }, []);

  return (
    <Layout>
      <section id="pageheader" className="container">
        <h1 className="big-heading">Dylan Allen</h1>
        <motion.span
          className="tagline"
          initial="hidden"
          animate="visible"
          variants={titleVariant}
        >
          JavaScript Engineer
        </motion.span>
      </section>
      <section className="inverted">
        <div className="introtext container">
          <p>
            Good {greeting}
            {visitor ? ", and welcome back!" : ","} I am a{" "}
            <strong>frontend web developer/team lead</strong> in{" "}
            <em>
              <a tabIndex={6} href="https://en.wikipedia.org/wiki/Tulsa,_Oklahoma">
                Tulsa, OK
              </a>
            </em>
            . I like to work with React, VueJS, and TypeScript. I have
            experience developing lambda functions, and really like serverless
            architecture. My DB experience is mostly NoSQL (DynamoDB &
            FireStore).
          </p>
        </div>
      </section>
      <section id="posts" className="container">
        <h1>Latest Posts</h1>
        <PostList
          className="style2"
          imgHeight="220px"
          imgWidth="300px"
        ></PostList>
      </section>
    </Layout>
  );
};

export default IndexPage;
