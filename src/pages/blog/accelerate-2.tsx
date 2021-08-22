import Layout from "../../components/Layout";
import Picture from "../../components/Picture";
import Comments from "../../components/Comments";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Accelerate2() {
  return (
    <Layout
      title={`${meta.title} | Book Review | Dylan Allen | JavaScript Developer | Frontend Web`}
      image={meta.image}
      description={meta.description}
    >
      <div className="container">
        <motion.h1 layoutId={`title-${meta.slug}`}>{meta.title}</motion.h1>
        <Picture
          src={meta.image}
          style={{ width: "100%", height: "45vw", maxHeight: "700px" }}
          layoutId={`post-${meta.slug}`}
        ></Picture>
        <p>
          This is a second post on the book{" "}
          <a href="https://nicolefv.com/book" target="_blank" rel="noreferrer">
            Accelerate
          </a>{" "}
          by Nicole Forsgren PhD, Jez Humble, and Gene Kim. The first post was
          on{" "}
          <Link to="/blog/accelerate-1">
            8 continuous delivery capabilities that drive improvements in
            software delivery performance{" "}
          </Link>
        </p>
        <h2>Key Capabilities</h2>
        <p>The 24 capabilities are organized into five categories.</p>
        <ul>
          <li>Continuous delivery</li>
          <li>Architecture</li>
          <li>Product and process</li>
          <li>Lean management and monitoring</li>
          <li>Cultural</li>
        </ul>
        <p>
          I covered <em>Continuous delivery</em> in the first post so I am
          starting with <em>Architecture capabilities</em> here.
        </p>
        <h3>Architecture</h3>
        <h4>Use a loosley coupled architecture</h4>
        <p>
          This means avoid dependencies between services and teams. If your team
          can develop, test, and deploy in isolation without the need to
          collaborate with another team, you can move much faster. It also means
          other teams won't be pulling the attention of your developers away to
          help build/test/deploy their code.
        </p>
        <p>
          In reality, this can be pretty difficult to pull off. If you have
          multiple teams each building pieces of a one large application, there
          will have to be some amount of collaboration and common interfaces. It
          is a good idea to architect those interfaces firdst just as you would
          start with an API spec to form a "contract" between the frontend and
          backend.
        </p>
        <hr />
        <h4>Architect for empowered teams</h4>
        <p>
          The research in book indicates that teams who can choose their own
          tools are better at continuous delivery. There are some things that
          are well suited to standardization across an engineering organization,
          and there are some things that should be left up to the team to
          decide. Not only will your engineers be happier and feel they have
          more control of how they do their work, your organization will be
          better off.
        </p>
        <hr />
        <h3>Product and process</h3>
        <h4>Gather and implement customer feedback</h4>
        <p>
          This should be obvious as it relates to any kind of product. In my
          experience, the challenge is in making sure that engineers understand
          why they are being asked to build features, who the customer is, and
          what the customer is trying to accomplish with their product.
          Sometimes a user story is not enough to share all of that context.
        </p>
        <hr />
        <h4>Make the flow of work visible through the value stream</h4>
        <p>
          Jira boards anyone (we actually use Linear at my company)? Visibility
          of work is important in software as it is in manufacturing or any
          other industry. From an engineers perspective, it can be jarring to
          have a large complex project dropped in your backlog with no notice.
          If the engineering team has some visibility up stream that can help
          engineers prepare (even if just mentally) for the next few sprints.
        </p>
        <p>
          It is also satisfying to see downstream when something you worked on
          crosses the finish line.
        </p>
        <hr />
        <h4>Work in small batches</h4>
        <p>
          If you have worked on an Agile team you will be familiar with this
          concept. Small, frequent deliveries allow faster feedback. This can be
          done on the technical side by breaking a complicated development task
          into several smaller tasks. On the product side, you can start with an
          MVP and follow up with improvements and new features after you have
          delivered a working product.
        </p>
        <hr />
        <h4>Foster and enabled team experimentation</h4>
        <p>
          The book describes this as{" "}
          <em>
            "the ability of developers to try out new ideas and create and
            update specifications during the development process, without
            requiring approval from outside the team"
          </em>
          . The "from outside the team" part is critical here. If another team
          is dependent on your team to build to a common agreement, you don't
          have as much freedom to be creative with how you solve a problem.
        </p>
        <p>
          It is important for your team members to take ownership of their work.
          Allowing experimentation is a great way to show them that they do have
          ownership.
        </p>
        <hr />
        <h3>Lean management and monitoring</h3>
        <h4>Have a lightweight change approval process</h4>
        <p>
          The book calls out pair programming and intrateam code reviews as a
          lightweight change approval process compared to an external change
          approval board.
        </p>
        <hr />
        <h4>
          Monitor across applications and infrastructure to inform business
          decisions
        </h4>
        <p>
          Logging and displaying metrics is important in any production system.
          The book also calls out the quality of your kanban boards (Jira or
          otherwise) and what kid of data you are getting from it. You should be
          able to easily monitor WIP, see any bottle necks, and have some
          measurement of quality.
        </p>
        <hr />
        <h4>Check system health proactively</h4>
        <p>
          Triggering an alert when something breaks is good and necessary, but
          reactive. If you can use thresholds and rate-of-change warnings, you
          may be able to address an issue before it becomes a problem for your
          customers. And that is a better time to solve a problem.
        </p>
        <hr />
        <h4>Improve processes and manage work with WIP limits</h4>
        <p>
          In my team we talk about getting work "all the way to done" as a top
          priority. Keeping an engineer busy bouncing between tasks accomplishes
          the goal of keeping the engineer busy. Our goal is to deliver
          software, not to stay busy. Limiting WIP can also bring visiblity to
          bottlenecks in your process.
        </p>
        <hr />
        <h4>
          Visualize work to monitor quality and communicate throughout the team
        </h4>
        <p>
          The previous three capabilities tie into this one. Monitoring, health
          checks, and WIP limits work best when they are easy to see.
          Dashboards, kanban boards, and product roadmaps all bring visiblity to
          the state of work and the services you are building.
        </p>
        <hr />
        <h3>Cultural capabilities</h3>
        <h4>Support a generative culture (as outlined by Westrum)</h4>
        <p>
          Ron Westrum's{" "}
          <a
            href="https://cloud.google.com/architecture/devops/devops-culture-westrum-organizational-culture"
            rel="nofollow"
          >
            organizational typology
          </a>{" "}
          model describes three different types of organizations: pathological
          (power oriented), bureaucratic (rule oriented), and generative
          (performance oriented).
        </p>
        <p>
          Some behaviors of a generative organization are: high cooperation,
          messengers are trained, risks are shared, bridging is encouraged,
          failure leads to inquiry, novelty is implemented.
        </p>
        <hr />
        <h4>Encourage and support learning</h4>
        <p>Learning should be thought of as an investment and not a cost.</p>
        <hr />
        <h4>Support and facilitate collaboration among teams</h4>
        <p>
          As opposed to siloed teams with little to no collaboration.
          Development, operations, infosec, and others should be encouraged to
          collaborate.
        </p>
        <hr />
        <h4>Provide resources and tools that make work meaningful</h4>
        <p>
          
        </p>
        <hr />
        <Comments slug={meta.slug}></Comments>
      </div>
    </Layout>
  );
}

export const meta = {
  title: "Accelerate - Architecture, Product & Process",
  description: `The second post on Accelerate's "24 key capabilities that drive improvement in software delivery performance". This post covers Architecture capabilities, Product and process, Lean management and monitoring capabilities, and Cultural capabilities.`,
  image: "/accelerate.jpg",
  slug: "accelerate-2",
  date: new Date(2021, 7, 3),
};
