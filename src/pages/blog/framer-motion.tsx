import Layout from '../../components/Layout'
import Picture from '../../components/Picture';
import Comments from '../../components/Comments';
import React from 'react';
import { motion } from 'framer-motion';

function FramerMotion() {

  return (
    <Layout title={`${meta.title} | Dylan Allen | JavaScript Developer | Front-end Web`} image={meta.image} description={meta.description}>
      <div className="container">
        <motion.h1 layoutId={`title-${meta.slug}`}>{meta.title}</motion.h1>
        <Picture
          src={meta.image}
          style={{ width: '100%', height: '45vw', maxHeight: '700px' }}
          layoutId={`post-${meta.slug}`}
        ></Picture>
        <p>
          I got into <a href="https://framer.com/motion/" rel="noreferrer" target="_blank">Framer Motion</a> lately. I wanted a project to use some of it's flashy features,
          so I started a photo gallery project, realized I didn't have time to make it great, and then thought
          "Hey! why don't I just update my personal site" and that's what we have here.
        </p>
        <p>
          It took more doing than I anticipated because to pull off the blog image & title smoothly transitioning into
          the next page when you click a blog link, I had to convert the site from Next.js to a standard single page
          React app. So I lost server side rendering, but decided it was worth it. Because cool animations are cool. 
        </p>
        <p>

        </p>
       
        <Comments slug={meta.slug}></Comments>
      </div>
    </Layout>
  )
}

export const meta = {
  title: 'Framer Motion',
  description: `I got into Framer Motion lately. I wanted a project to use some of it's flashy features, so I started a photo gallery project, realized I didn't have time to make it great, and then thought "Hey! why don't I just update my personal site" and that's what we have here.`,
  image:  '/framer-motion.png',
  slug: 'framer-motion',
  date: new Date(2021, 4, 3)
}

export default FramerMotion;