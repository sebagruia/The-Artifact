import Layout from "../components/Layout";
import PreviewArticle from "../components/PreviewArticle";
// import fetch from "isomorphic-unfetch";
import fetch from 'node-fetch';

const Home = (props) => {
  return (
    <Layout>
      <div className="container">
        <h1 className="page-name">
          International <span className="enhance">Headlines</span>
        </h1>
        <main>
          <hr></hr>
          {props.data.map((article, index) => (
            <PreviewArticle
              key={`${article.source.id}${article.source.name}${index}`}
              article={article}
            />
          ))}
        </main>
      </div>

      {/* =====LOCAL STYLES===== */}
      <style jsx>{`
      .container{
          width:65%;
          margin:0 auto;
          margin-top: 200px;
        }
        .page-name {
          
          margin-left: 17px;
          text-align: left;
          font-family: "Quicksand", sans-serif;
          font-weight: 400;
          font-variant: small-caps;
        }
        .page-name .enhance{
          font-variant: small-caps;
          font-size:1rem;
        }
        main {
          width:100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin: 0 auto;
          background-color: #fff;
        }
        hr {
          border-width: 0.5px;
          margin-bottom: 15px;
        }

         {/* =====LOCAL STYLES Media Queries===== */}
         @media screen and (min-width:320px) {
          .container{
              width:100%;
            }
            hr {
              width: 90%;
            }
         }
         @media screen and (min-width:576px) {
            hr {
              width: 96%;
            }
         }
       
         @media screen and (min-width:1200px) {
          .container{
              width:90%;
            }
         }
         @media screen and (min-width:1500px) {
          .container{
              width:75%;
            }
         }
         @media screen and (min-width:1600px) {
          .container{
              width:65%;
            }
         }
      `}</style>
    </Layout>
  );
};

// Home.getInitialProps = async (context) => {
//   const res = await fetch(
//     "http://newsapi.org/v2/top-headlines?apiKey=7467175589024bc6942b178bf2392c5a&country=de&pageSize=20"
//   );
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.articles.length}`);

//   return {
//     articles: data.articles
//   };
// };

export async function getStaticProps (){
  const res = await fetch(
        "http://newsapi.org/v2/top-headlines?apiKey=7467175589024bc6942b178bf2392c5a&country=de&pageSize=20"
      );
      const data = await res.json();
    
      console.log(`Show data fetched. Count: ${data.articles.length}`);
    
      return {
        props: {data:data.articles}
      };
}

export default Home;
