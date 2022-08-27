import BlogPosts from "../components/BlogPosts";
import BlogTitle from "../components/BlogTitle";
import Featured from "../components/Featured";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <BlogTitle />
      <Featured />
      <BlogPosts />
    </>
  );
};

export default Home;
