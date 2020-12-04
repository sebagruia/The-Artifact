import Layout from "../../components/Layout";

const Post = ({ postData }) => {
  return <Layout postData={postData}></Layout>;
};

export async function getServerSideProps(context) {
  const { title, country, keyword, categoryValue } = context.query;
  console.log(context.query);
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&q=${keyword}&category=${categoryValue}&pageSize=34&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );

  const data = await res.json();
  const findPost = data.articles.filter((article) => article.title === title);
  console.log(findPost);
  return {
    props: { postData: findPost[0] },
  };
}

export default Post;
