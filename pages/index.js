import Layout from "../components/Layout";
import PreviewArticle from "../components/PreviewArticle";
import fetch from "isomorphic-unfetch";

const Home = ({ articles }) => {
  return (
    <Layout>
      <main>
        <h1 className="page-name">
          International<span>Top Headlines</span>
        </h1>
        <hr></hr>
        {articles.map((article, index) => (
          <PreviewArticle
            key={article.source.id + article.source.name + index}
            article={article}
          />
        ))}
      </main>

      {/* =====LOCAL STYLES===== */}
      <style jsx>{`
        hr {
          border-width: 0.5px;
          margin-bottom: 15px;
        }
        .page-name {
          margin-top: 200px;
          margin-left: 17px;
          text-align: left;
          font-family: "Quicksand", sans-serif;
          font-weight: 300;
        }
        main {
          width:65%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-content: space-between;
          margin: 0 auto;
          background-color: #fff;
        }

         {/* =====LOCAL STYLES Media Queries===== */}
         @media screen and (min-width:320px) {
            main{
              width:100%;
            }
            hr {
              width: 90%;
            }
         @media screen and (min-width:576px) {
            hr {
              width: 96%;
            }
       
         @media screen and (min-width:1200px) {
            main{
              width:90%;
            }
         @media screen and (min-width:1500px) {
            main{
              width:75%;
            }
         @media screen and (min-width:1600px) {
            main{
              width:65%;
            }
      `}</style>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(
    "http://newsapi.org/v2/top-headlines?apiKey=7467175589024bc6942b178bf2392c5a&country=de&pageSize=20"
  );
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.articles.length}`);

  return {
    articles: data.articles
  };
};

export default Home;
