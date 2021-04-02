import Layout from "../../components/Layout";
import Picture from "../../components/Picture";
import Comments from "../../components/Comments";

const NewSite: React.FunctionComponent<{ state: any }> = () => {
  return (
    <Layout
      title={`${meta.title} | Dylan Allen | JavaScript Developer | Frontend Web`}
      image={meta.image}
      description={meta.description}
    >
      <div className="container">
        <h1>{meta.title}</h1>
        <Picture
          src={meta.image}
          style={{ width: "100%", height: "45vw", maxHeight: "700px" }}
          layoutId={`post-${meta.slug}`}
        ></Picture>
        <p>
          My old personal site was quite old, and needed a refresh. It was also
          on a PHP based CMS, and I am intentionally out of the PHP game. So I
          decided to build a new site from the ground up as an exercise. I
          recently built a blog platform in Nuxt(Vue) with an all AWS serverless
          backend, and that was a pretty cool project, so I thought about using
          that. I decided to go this route so I could get more React experience.
          I built a few things with React at the last company I worked for, but
          my day job is 100% Angular right now. I want to make sure I stay up to
          speed on the tech I like.
        </p>
        <h2>Project deets</h2>
        <ul>
          <li>Next.js (React Framework) </li>
          <li>Firebase Authentication</li>
          <li>TypeScript</li>
          <li>FireStore DB (for comments)</li>
          <li>SCSS</li>
          <li>Vercel SSR hosted</li>
        </ul>
        <p>
          The code is open source in GitHub, so feel free to check it out. You
          will need a Firebase project to handle auth and comments. The project
          README walks you through the steps of setting up the environment
          variables.
        </p>
        <Comments slug={meta.slug}></Comments>
      </div>
    </Layout>
  );
};

export const meta = {
  title: "This New Site",
  description:
    "My old personal site was quite old, and needed a refresh. It was also on a PHP based CMS, and I am intentionally out of the PHP game. So I decided to build a new site from the ground up as an exercise. Tech stack: Next.js(React), TypeScript, Firebase auth, Firestore DB, SCSS, and Vercel SSR hosting.",
  image: "/javascriptDev.png",
  slug: "newsite",
  date: new Date(2020, 5, 3),
};

export default NewSite;
