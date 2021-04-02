import Layout from '../../components/Layout'
import Picture from '../../components/Picture';
import Comments from '../../components/Comments';
import React from 'react';

const Accelerate: React.FunctionComponent<{ state: any }> =  () => {

  return (
    <Layout
      title={`${meta.title} | Book Review | Dylan Allen | JavaScript Developer | Frontend Web`}
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
          <strong>
            If you are a developer, or in any level of development management,
            you should read this book.
          </strong>
        </p>
        <p>
          <a href="https://nicolefv.com/book" target="_blank" rel="nofollow">
            Accelerate
          </a>{" "}
          is a book by Nicole Forsgren PhD, Jez Humble, and Gene Kim
        </p>
        <p>
          I love this book so much. I have read a lot of good books with
          business advice based on the experience of successful people. This
          book is based on solid data and research collected over 4 years, not
          just someone's experience and opinion. Even with the stats and
          research on prominent display, the book is easy to read. The analysis
          and conclusions are clearly presented and organized.
        </p>
        <p>
          The tagline of the books is{" "}
          <em>
            Building and Scaling High Performance Technology Organizations
          </em>
          . As a senior developer at a young startup, this is all very timely.
          If you want to skip to the end, they list the{" "}
          <em>
            "24 key capabilities that drive improvements in software delivery
            performance in a statistically significant way"
          </em>{" "}
          in appendix A. However, that will not give you the context and the why
          behind it all. So you should still read the whole book. After I
          finished the book, I left a bookmark at that appendix for quick
          reference.
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
          Over a few posts I am going to run through each and provide my
          summary/thoughts. I am going to start with Continuous Delivery, which
          is 8 of the 24 capabilities.
        </p>
        <h3>Continuous delivery</h3>
        <h4>Use version control for all production artifacts</h4>
        <p>
          This one is the obvious low hanging fruit. I have not worked on a
          software team that does not use version control, and I would not work
          on a team that doesn't.
        </p>
        <hr />
        <h4>Automate your deployment process</h4>
        <p>
          Also obvious, but much more difficult to accomplish. I spent a lot of
          time automating deployments while I worked at VoiceFoundry. That was
          all AWS, so it was a lot of CloudFormation, Serverless Framework,
          CodePipeline, and some node scripts using the AWS-SDK. I did some work
          in Jenkins and a very small amount of Terraform. I enjoyed that work
          quite a bit. It was tricky but so worth it.
        </p>
        <p>
          Few things are more satisfying than a smooth automated deployment
          process. It makes deployments quick and easy, and more importantly, it
          reduces opportunities for human error. This becomes more important
          when you get to the next couple capabilities because you are ideally
          deploying regularly. If deployments are painful, your developers will
          not be excited about making regular deployments.
        </p>
        <hr />
        <h4>Implement continuous integration</h4>
        <p>
          Continuous integration is the first half of CI/CD, but it has enough
          value on its own if done properly. And by properly I don't just mean
          that you merge code regularly. A CI process should include automated
          tests on check-in, and automated builds. Checking in regularly is also
          very important. The bigger the PRs get, the more likely you will run
          into merge conflicts, and the more difficult it will be to debug when
          you find an issue with your branch.
        </p>
        <hr />
        <h4>Use trunk-based development methods</h4>
        <p>
          <a
            href="https://trunkbaseddevelopment.com/"
            rel="nofollow"
            target="_blank"
          >
            Trunk-based development
          </a>{" "}
          is a whole thing, and every team I have worked on follows the basics
          of this model. A couple key points that not everyone follows is
          keeping branch and fork lifetimes to less than a day, and never or
          rarely having "code freeze" periods. Every developer who has reviewed
          a PR has probably reviewed (and created) a PR that was bigger than it
          should have been. It is certainly possible to make your PRs too small,
          but I have very rarely seen that cause problems. Large PRs on the
          other hand can be awful.
        </p>
        <hr />
        <h4>Implement test automation</h4>
        <p>
          While this should be part of continuous integration, it rightfully has
          it's own bullet point in the book. I'll be honest, I don't like
          writing tests. That is probably not an uncommon sentiment, but they
          are very important.
        </p>
        <hr />
        <h4>Support test data management</h4>
        <p>
          Not as deep of a topic as the others, and the benefits are obvious.
          However, this is easy to overlook. As a frontend dev, I often have to
          generate a lot of test data, and different sets of data to test
          pagination and such. It is a much better use of time to have
          developers writing code instead of creating and manipulating test
          data. For my current local development setup, I created a Postman
          collection that will seed a cleaned database to give me enough data to
          test the UI, and test all of the API endpoints at the same time.
        </p>
        <hr />
        <h4>Shift left on security</h4>
        <p>
          There is not a lot of content in the book on this, but they lay it out
          pretty concisely on page 56, Chapter 4.{" "}
        </p>
        <blockquote>
          "High performing teams were more likely to incorporate information
          security into the delivery process. Their infosec personnel provided
          feedback at every step of the software delivery lifecycle, from design
          through demos to helping with test automation"
        </blockquote>
        <hr />
        <h4>Implement continuous delivery</h4>
        <p>
          So this is kind of what the previous capabilities have been leading up
          to. The others are all sufficiently important on their own, but
          without them, you are going to have a hard time with CD. The goal is
          to keep your software{" "}
          <em>"in a deployable state throughout its lifecycle"</em>. To do that,
          you can't merge changes that break the build or otherwise put it in a
          non-deployable state. You can't merge changes that you haven't
          thoroughly tested. And if something does slip through (something
          always does) you drop everything and fix it. Deployablility at any
          moment is the priority.
        </p>
        <hr />
        <p>
          You can read more about continuous delivery at{" "}
          <a
            href="https://continuousdelivery.com/"
            rel="nofollow"
            target="_blank"
          >
            continuousdelivery.com
          </a>
          . I will cover the remaining capabilities in another post. If you have any thoughts, questions, or corrections to what was discussed here, drop it in the comments.
        </p>
        <Comments slug={meta.slug}></Comments>
      </div>
    </Layout>
  );
}

export const meta = {
  title: 'Accelerate - Continuous Delivery',
  description: `This book is based on solid data and research collected over 4 years, not just someone's experience and opinion. Even with the stats and research on prominent display, the book is easy to read. The analysis and conclusions are clearly presented and organized.`,
  image:  '/accelerate.jpg',
  slug: 'accelerate-1',
  date: new Date(2021, 1, 3)
}

export default Accelerate;