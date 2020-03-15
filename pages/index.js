import Layout from "../components/Layout";
import PreviewArticle from '../components/PreviewArticle';
import fetch from 'isomorphic-unfetch';

const Home = ({articles}) => {
  return (
    <Layout>
      <h5>This is Top Headlines</h5>
      <main>
        {
          articles.map((article)=>
            <PreviewArticle article = {article}/>
          )
        }
        

      </main>
      <style jsx>{`
        h5 {
          margin-top:150px;
        }
        main{
          display:flex;
          flex-wrap:wrap;
          flex-direction: row;
          width:992px;
          margin:0 auto;
          background-color:#fff;
        }
        `}</style>
    </Layout>
  );
};

Home.getInitialProps = async ()=>{
  const res = await fetch('http://newsapi.org/v2/top-headlines?apiKey=7467175589024bc6942b178bf2392c5a&country=de&pageSize=20');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.articles.length}`);

  return{
    articles:data.articles
  }
}

export default Home;
