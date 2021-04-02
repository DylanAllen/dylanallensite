import * as React from 'react'
import { useEffect } from 'react'
import NavMenu from './NavMenu'
import { motion } from 'framer-motion';
import Footer from './Footer';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

type Props = {
  children: React.ReactChild[] | React.ReactChild
  title?: string;
  image?: string;
  description?: string;
}

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  exit: { opacity: 0, transition: { duration: 0.2, ease: easing } },
  enter: {
    opacity: 1,
    transition: { delay: 0.1, duration: 0.2, ease: easing }
  }
};

const Layout: React.FunctionComponent<Props> = (props) => {

  const { children, image } = props;
  const title = props.title || 'Dylan Allen | JavaScript Engineer | Frontend Web | React | Serverless';
  const description = props.description || "I am a frontend web developer in Tulsa, OK. I like to work with React, VueJS, and TypeScript. I have experience developing lambda functions, and really like serverless architecture. My DB experience is mostly NoSQL (DynamoDB & FireStore).";
  const history = useHistory();
  const postGtag = (url: string) => {
    if (process.env.NODE_ENV === 'development') return null;
    let win = window as any;
    win.gtag('config', win.ga_id, {'page_path': url});
  }

  useEffect(() => {
    const listen = history.listen((location) => {
      postGtag(location.pathname);
    });

    return () => {
      listen();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
    return (
      <div >
        <Helmet>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content={description} />
          { image && <meta property="og:image" content={`https://www.dylanallen.net${image}`}></meta>  }
          { image && <meta property="twitter:image" content={`https://www.dylanallen.net${image}`}></meta> }
          <meta property="og:title" content={title}></meta>
          { props.description && <meta property="og:description" content={props.description}></meta> }
        </Helmet>
        <main id="main">
          <header id="mainheader" className="container">
            <Link to="/">
                <img alt="DA Logo" src="/da-purple.png" className="headerlogo" style={{height: "42.4px", width: "40px" }}></img>
                {/* <ContactInfo className="headerlogo" style={{height: "40px", width: "40px" }} /> */}
            </Link>
            <NavMenu></NavMenu>
          </header>
          <div className="maincontainer">
          <motion.div initial="exit" animate="enter" exit="exit">
            <motion.div variants={textVariants}>
              {children}
            </motion.div>
          </motion.div>
          </div>
          <Footer />
        </main>
      </div>
    )
  }
export default Layout
