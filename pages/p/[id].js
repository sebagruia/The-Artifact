import Layout from "../../components/Layout";

const Post = ({ postData }) => {
  return <Layout postData={postData}></Layout>;
};

export async function getServerSideProps(context) {
  const my_API = "7467175589024bc6942b178bf2392c5a";
  const { id, country, q, category } = context.query;

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&q=${q}&category=${category}&pageSize=34&apiKey=${my_API}`
  );

  const data = await res.json();
  const findPost = data.articles.filter(
    article =>
      `${article.source.id}${article.source.name}${article.author}${article.publishedAt}` === id
  );
  return {
    props:{postData: findPost[0]}
    
  };
};



export default Post;
