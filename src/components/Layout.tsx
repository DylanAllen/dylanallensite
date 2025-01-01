import * as React from 'react'
import { useEffect } from 'react'
import NavMenu from './NavMenu'
import Footer from './Footer';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

type Props = {
  children: React.ReactElement[] | React.ReactElement
  title?: string;
  image?: string;
  description?: string;
}

function Layout(props: Props) {

  const { children, image } = props;
  const title = props.title || 'Dylan Allen | JavaScript Engineer | Front-end Web | React | Serverless';
  const description = props.description || "I am a front-end web developer in Tulsa, OK. I like to work with React, VueJS, and TypeScript. I have experience developing lambda functions, and really like serverless architecture. My DB experience is mostly NoSQL (DynamoDB & FireStore).";
  const location = useLocation();
  const postGtag = (url: string) => {
    if (process.env.NODE_ENV === 'development') return null;
    let win = window as any;
    win.gtag('config', win.ga_id, {'page_path': url});
  }

  useEffect(() => {
    postGtag(location.pathname);
  }, [location]);
  
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
            <Link tabIndex={5} to="/">
                <img alt="DA Logo" src="/da-purple.png" className="headerlogo" style={{height: "42.4px", width: "40px" }}></img>
            </Link>
            <NavMenu></NavMenu>
          </header>
          <div className="maincontainer">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    )
  }
export default Layout
