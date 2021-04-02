import Layout from "../../components/Layout";
import PostList from "../../components/PostList";

const Blog: React.FunctionComponent<{ state: any }> = () => {
  return (
    <Layout title="Blog | Dylan Allen | JavaScript Developer | Frontend Web">
      <div className="container">
        <h1>Blog</h1>
        <PostList className="style1"></PostList>
      </div>
    </Layout>
  );
};

export default Blog;
