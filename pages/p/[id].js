import Layout from "../../components/Layout";
import PostContainer from "../../components/PostContainer";
import fetch from "isomorphic-unfetch";

const Post = ({ postData }) => {
  return <Layout postData={postData}></Layout>;
};

Post.getInitialProps = async context => {
  const my_API = "7467175589024bc6942b178bf2392c5a";
  const id = context.query.id;
  const [internationalData, deutschData] = await Promise.all([
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=34&apiKey=${my_API}`
    ).then(res => res.json()),
    fetch(
      `https://newsapi.org/v2/top-headlines?country=de&pageSize=21&apiKey=${my_API}`
    ).then(res => res.json())
  ]);

  const data = [...internationalData.articles, ...deutschData.articles];
  const findPost = data.filter(
    article =>
      `${article.source.id}${article.source.name}${article.author}` === id
  );

  return {
    postData: findPost[0]
  };
};

export default Post;
