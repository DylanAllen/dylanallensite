import Layout from "../../components/Layout";
import PostList from "../../components/PostList";

function Blog() {
  return (
    <Layout title="Blog | Dylan Allen | JavaScript Developer | Front-end Web">
      <div className="container">
        <h1>Blog</h1>
        <PostList className="style1"></PostList>
      </div>
    </Layout>
  );
};

export default Blog;
