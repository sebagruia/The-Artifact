import Layout from "../../components/Layout";

const Post = ({ postData }) => {
  return <Layout postData={postData}></Layout>;
};

export async function getServerSideProps(context) {
  try{
    const { title, country, keyword, categoryValue } = context.query;
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&q=${keyword}&category=${categoryValue}&pageSize=34&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
  
    const data = await res.json();
    const findPost = data.articles.filter((article) => article.title === title);
    return {
      props: { postData: findPost[0] },
    };
  }
  catch(error){
    return error;
  }

}

export default Post;
