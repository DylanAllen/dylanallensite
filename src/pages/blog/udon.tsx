import Layout from "../../components/Layout";
import { Markdown } from "grommet";
import Comments from "../../components/Comments";
import Picture from "../../components/Picture";

const md = `
I recently published my first honest to goodness open source project. I have been working on this on nights and weekends for the past several months. My wife and I welcomed a new baby during that time, so I took a break from it for a while, and then picked it back up recently. It is still very much a work in progress, but I got it to a point that I am proud enough to share it with the world. So without further ado, meet Udon: https://github.com/DylanAllen/udon

<figure>
<img src="https://firebasestorage.googleapis.com/v0/b/udon-pm.appspot.com/o/images%2Fudon-homepage.png?alt=media&token=426e47cf-9ba4-48c9-964a-3d1ff1b2d7ba" class="centerimage">
<figcaption>Here is the homepage with some nonsense data. </figcaption>
</figure>
<br/>
I started this project because I wanted to build something from the ground up using modern web technologies. I decided to make a project management and time tracking system, because I knew I could build something better for my agency than the system they are using. I have learned so much in the process, and it has been way more fun than I imagined it would. 

<figure>
<img src="https://firebasestorage.googleapis.com/v0/b/udon-pm.appspot.com/o/images%2Fudon-project-page.png?alt=media&token=a31ca1fe-d819-42f3-b57a-cfa1352be581" class="centerimage">
<figcaption>Project detail page with task data, and project chat. Realtime chat, BTW.</figcaption>
</figure>
<br/>
Udon is build with [Vue.js](https://vuejs.org/), Vue Router, Google's [Firestore](https://firebase.google.com/products/firestore/) database, Firebase authentication, and Firebase storage. I am running my demo site on Firebase hosting as well. So far all of the dev work has been well under the free tier for the Firebase services.

<figure>
<img src="https://firebasestorage.googleapis.com/v0/b/udon-pm.appspot.com/o/images%2Fudon-add-task.png?alt=media&token=9d69b7ce-7e10-432f-a438-9c15c1f88daf" class="centerimage">
<figcaption>Modal task entry form.</figcaption>
</figure>
<br/>
Once this product is ready for prime time I will probably set up a brochure site, outline all of the features, and offer it as a hosted solution if anyone is interested in using it. At the time of this blog post it does the following:

* Tracks basic project & client data
* Has project summary views in card format (pictured above), and table format
* Has filter and sort features for project list
* Allows users to create tasks within projects
* Allows users to log time to tasks
* Allows users to review time log data with filter and sort features
* Has a start & stop timer for time entry that is persistent across pages
* Has basic user account creation, profile, and password reset functionality
* Has realtime chat streams within each project
* Allows users to upload files to each project, download files, and delete files

<br/>
That is about it. I would gladly welcome any contributions to the project, and in the near future, I will be looking for a brave agency to volunteer for beta testing!
`;

const Comps = {
  p: {
    component: "paragraph",
    props: { fill: "true" },
  },
};

const UdonOne: React.FunctionComponent<{ state: any }> = () => (
  <Layout
    title={`${meta.title}  | Dylan Allen | JavaScript Developer | Frontend Web`}
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
      <div className="postContainer">
        <Markdown components={Comps}>{md}</Markdown>
      </div>
      <Comments slug={meta.slug}></Comments>
    </div>
  </Layout>
);

export const meta = {
  title: "Udon Project Management",
  description:
    "Udon is a project management and time tracking system built on Vue.js and Firebase. This is an open source tool geared towards small agencies that need to keep track of multiple projects. It is a light weight web based tool to keep project info, documents, and comunication in one place.",
  image: "/udonlogo.png",
  slug: "udon",
  date: new Date(2020, 4, 20),
};

export default UdonOne;
