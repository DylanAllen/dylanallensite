import Layout from "../../components/Layout";
import Picture from "../../components/Picture";
import Comments from "../../components/Comments";
import React from "react";
import { Link } from "react-router-dom";

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
          On October 5th 2020, I started at{" "}
          <Link to="https://moov.io">Moov Financial</Link> as a senior
          frontend engineer. I am so excited to be a part of what we are
          building!
        </p>
        <h2>Open source</h2>
        <p>
          Moov started as an open source project for NACHA file creation and
          validation for ACH. I love being part of a company that is
          contributing to the open source community. The OSS projects are about
          two years old at this point and have an active community contributing
          to and using the projects.
        </p>
        <h2>Modern tech</h2>
        <p>
          For the past few years I have done some React development and a lot of
          Angular development. The problem was, I don't really like Angular. I
          am so happy to be out of the Angular game and head first into the
          React world. Moov works the way I want to work, open, collaborative,
          and cutting edge. The backend is written in Go, which is the new cool
          backend language. If I was to venture back into backend, Go would be
          #2 on my list of languages to use (after Node of course). The docker
          image that I use for local development is easy and fast, which is a
          big change of pace from the big nasty Java/Backbase stack I had to run
          for BOK.
        </p>
        <p>
          Other nice changes for me personally: No more VPN, no commute to an
          office (Moov is fully remote), and Google Workspace for everything.
          And it is wonderful that everyone in the company is crazy talented. I
          don't mean this as a knock against my past employers, I have worked
          with some awesome and talented people, but there is only so much
          talent in Tulsa. There are always weak links, but with Moov being
          small, distributed, well funded, and run by industry veterans, they
          have been able to attract some amazing talent. I am super excited to
          be working with them.
        </p>

        <Comments slug={meta.slug}></Comments>
      </div>
    </Layout>
  );
};

export const meta = {
  title: "Moov Financial",
  description:
    "On October 5th 2020, I started at Moov Financial as a senior frontend engineer. Moov started as an open source project for NACHA file creation and validation for ACH. I love being part of a company that is contributing to the open source community, and building amazing banking software",
  image: "/moov-banner.jpg",
  slug: "moov",
  date: new Date(2020, 10, 17),
};

export default NewSite;
