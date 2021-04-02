import Layout from "../../components/Layout";
import Picture from "../../components/Picture";
import Comments from "../../components/Comments";

const Noiiice: React.FunctionComponent<{ state: any }> = () => {
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
          For the past several months I have been working on a blog CMS, and it
          is finally ready to use! I have a few more features that I wan to add
          before I give it to 1.0 distinction, but it is available on{" "}
          <a href="https://github.com/DylanAllen/noiiice">Github</a> to clone
          and deploy. You can see the demo site here:{" "}
          <a href="https://noiiice.com/">Noiiice.com</a>.
        </p>
        <p>
          Noiiice is an open source blog platform built with the Serverless
          framework, NuxtJS, AWS Lambda, DynamoDB, API Gateway, S3, and Cognito.
          The serverless architecture provides fast performance, virtually
          infinite scalability, and very cheap to operate.
        </p>
        <h2>Features</h2>
        <ul>
          <li>
            Authentication system/account creation in app (using AWS Cognito)
          </li>
          <li>Admin UI to create/manage posts, and manage comments</li>
          <li>Automated emails when comments created</li>
          <li>
            Server side rendering on blog, posts, and pages (posts stored in
            DynamoDb table and dynamically rendered, pages coded in Nuxt
            framework)
          </li>
          <li>
            A few base themes, and a SCSS based theming system with light/dark
            mode detection
          </li>
          <li>Google Analytics integration</li>
          <li>
            Media manager (image upload, browse images, and copy url/img tag)
          </li>
          <li>Comment API throttling for users (using AWS API Gateway)</li>
          <li>Automated deployment with Serverless framework.</li>
        </ul>
        <p>
          I am still actively developing this platform (in my spare time) so
          more features will be coming soon. If you want to give it a try, go to
          the GitHub page and follow the deployment instruction on the README.
          If you run into issue, or have question, feel free to post a Github
          issue on the repo, or comment on this post:{" "}
          <a href="https://noiiice.com/post/install">Install Noiiice</a>;
        </p>
        <Comments slug={meta.slug}></Comments>
      </div>
    </Layout>
  );
};

export const meta = {
  title: "Noiiice Blog CMS",
  description:
    "Noiiice is an open source blog platform built with the Serverless framework, NuxtJS, AWS Lambda, DynamoDB, API Gateway, S3, and Cognito. The serverless architecture provides fast performance, virtually infinite scalability, and very cheap to operate.",
  image: "/NoiiiceScreenshot.png",
  slug: "noiiice",
  date: new Date(2020, 5, 3),
};

export default Noiiice;
