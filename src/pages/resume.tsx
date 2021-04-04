import Layout from '../components/Layout'
import TypedText from '../components/TypedText';

const techStack = {
  JavaScript: 6,
  React: 5,
  TypeScript: 5,
  VueJS: 5,
  Angular: 4,
  'Framer Motion': 3,
  'CSS/SCSS': 3,
  'Node.js': 4,
  AWS: 4,
  'UI Design': 3,
  DynamoDB: 5,
  Lambda: 4,
  CloudFormation: 4,
  Python: 3,
  'Serverless Framework': 4,
  'Serverless Architecture': 4,
  FireStore: 3
}

let techArr = [];
for (const word in techStack) {
  techArr.push(word);
}

const Resume = () => {

  return (
  <Layout>
    <section id="pageheader" className="container">
      <h1 className="big-heading">Dylan Allen</h1>
      <TypedText className="tagline" text="JavaScript Engineer" />
    </section>
    <section className="inverted">
      <div className="introtext container">
        <p>
          I am a <strong>frontend web developer/team lead</strong> in <em><a href="https://en.wikipedia.org/wiki/Tulsa,_Oklahoma">Tulsa, OK</a></em>.
          I like to work with React, VueJS, and TypeScript. I have experience developing lambda functions, and really like serverless architecture. My DB experience is mostly NoSQL (DynamoDB & FireStore).
        </p>
      </div>
    </section>
    <section className="techStack container">
      <h1>Tech</h1>
      <div className="wordGrid">
        {Object.entries(techStack).map(tech => <span className={'techLevel l' + tech[1]} key={tech[0]}>{tech[0]}</span>)}
      </div>
    </section>
    <section className="experience">
      <h1 className="container">Experience</h1>
      <div className="experience-container">

      <div className="">
          <div className="job-block container">
            <h2 className="job-header">
              <a href="https://moov.io">Moov Financial</a><span className="title-sep"> | </span><span className="duration">Oct 2020 - Present</span>
            </h2>
            <div className="job-title">
                Team Lead - Payments
            </div>
            <p className="job-description">
              Lead an engineering team that is responsible for our core payment services
            </p>
          </div>
        </div>

        <div className="inverted">
          <div className="job-block container">
            <h2 className="job-header">
              BOK Financial<span className="title-sep"> | </span><span className="duration">Mar 2020 - Oct 2020</span>
            </h2>
            <div className="job-title">
              Software Developer III, VP
            </div>
            <p className="job-description">
              Frontend development (Angular8) on a new commercial web portal built on the Backbase platform.
            </p>
          </div>
        </div>

        <div className="">
          <div className="job-block container">
            <h2 className="job-header">
              VoiceFoundry<span className="title-sep"> | </span><span className="duration">Nov 2018 - Mar 2020</span>
            </h2>
            <div className="job-title">
              Software Developer
            </div>
            <p className="job-description">
              Amazon Connect development and implementation for various clients.
            </p>
            <p className="job-description">
              Develop Connect contact flows, Lex bots, lambda functions, and web applications for enterprise contact center solutions.
            </p>
          </div>
        </div>

        <div className="inverted">
          <div className="job-block container">
            <h2 className="job-header">
              Hampton Creative<span className="title-sep"> | </span><span className="duration">Feb 2017 - Nov 2018</span>
            </h2>
            <div className="job-title">
              Senior Web Programmer
            </div>
            <p className="job-description">
            Developed websites that meet each project's design and function requirements.<br/>
            Worked with clients to gather requirements and scope web projects.<br/>
            Web App Development<br/>
            Wordpress Theme & Plugin development<br/>
            SEO | WooCommerce | BigCommerce | Shopify
            </p>
          </div>
        </div>

        <div className="">
          <div className="job-block container">
            <h2 className="job-header">
              Webco Industries<span className="title-sep"> | </span><span className="duration">May 2016 - Feb 2017</span>
            </h2>
            <div className="job-title">
              Inventory Analyst
            </div>
            <p className="job-description">
              Responsible for stainless tubing inventory management.
            </p>
            <p className="job-description">
              Developed material stocking strategies for stainless tubing, and created an audit system to ensure that all materials were compliant with their strategy specifications.
            </p>
            <p className="job-description">
              Lead weekly inventory management meetings, identified issues, and delegated tasks. Lead efforts that resulted in a 14% reduction in aged inventory, and hit monthly inventory turns targets for 5 consecutive months.
            </p>
          </div>
        </div>

        <div className="inverted">
          <div className="job-block container">
            <h2 className="job-header">
              Baker Hughes<span className="title-sep"> | </span><span className="duration">Feb 2011 - Nov 2015</span>
            </h2>
            <div className="job-title">
              Project Manager/Business Development Manager
            </div>
            <p className="job-description">
              Received Core Value Award for leading North America wide, interdepartmental team in a project to design and implement a new order processing and tracking solution.
            </p>
            <p className="job-description">
              Created inventory management tools that instantly pull, scrub, and analyze data used by the sales team to proactively sell slow moving stock. This increased inventory turnover and lowered inventory holding costs.
            </p>
            <p className="job-description">
              Redesigned SharePoint based solution used to create orders and track through quote, assembly, shipping, and billing. This system provides real time updates on order status and revenue estimates.
            </p>
            <p className="job-description">
              Supervised a team of 17 across 3 departments.
            </p>
            <p className="job-description">
              Worked with global team to create world-wide product sales forecast and material replenishment planning.
            </p>
          </div>
        </div>
        
      </div>
    </section>

    <section className="experience">
      <h1 className="container">Education</h1>
      <div className="experience-container">
        <div className="">
          <div className="job-block container">
            <h2 className="job-header">University of Tulsa</h2>
            <div className="job-title">
              Bachelor of Science in Business Administration
            </div>
            <p className="job-description">
              Major: Economics<br/>
              Minor: Finance
            </p>
          </div>
        </div>
      </div>
    </section>
    
  </Layout>
)}

export default Resume
