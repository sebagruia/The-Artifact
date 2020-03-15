import Layout from "../components/Layout";
import PreviewArticle from '../components/PreviewArticle';
import fetch from 'isomorphic-unfetch';

const Home = ({articles}) => {
  return (
    <Layout>
      <h5>This is Top Headlines</h5>
      <main>
        <PreviewArticle articles = {articles}/>

      </main>
      <style jsx>{`
        h5 {
          margin-top:150px;
        }
        main{
          background-color:#fff;
        }
        `}</style>
    </Layout>
  );
};

Home.getInitialProps = async ()=>{
  const res = await fetch('http://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=7467175589024bc6942b178bf2392c5a');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.articles.length}`);

  return{
    articles:data.articles
  }
}

export default Home;
