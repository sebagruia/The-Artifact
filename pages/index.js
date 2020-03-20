import Layout from "../components/Layout";
import PreviewArticle from "../components/PreviewArticle";
import Main from '../components/Main';
import fetch from "isomorphic-unfetch";
const International = (props) => {
  
  return (
    <Layout>
      <div className="container">
        <h1 className="page-name">
          International <span className="enhance">Headlines</span>
        </h1>
        <Main >
          {props.data.map((article, index) => (
            <PreviewArticle
              key={`${article.source.id}${article.source.name}${index}`}
              article={article}
            />
          ))}
        </Main>
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

         {/* =====LOCAL STYLES Media Queries===== */}
         @media screen and (min-width:320px) {
          .container{
              width:100%;
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


International.getStaticProps = async()=>{
  const my_API = '7467175589024bc6942b178bf2392c5a';
  const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=34&apiKey=${my_API}`
      );
      const data = await res.json();
      return {
        props: {data:data.articles}
      };
}

export default International;
