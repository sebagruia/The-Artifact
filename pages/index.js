import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const International = props => {
  return (
    <Layout internationalArticles={props.data}>
      <h1 className="page-name">
        International <span className="enhance">Headlines</span>
      </h1>
      <hr></hr>
      <style jsx>{`
        .page-name {
          margin-left: 17px;
          text-align: left;
          font-family: "Quicksand", sans-serif;
          font-weight: 400;
          font-variant: small-caps;
        }
        .page-name .enhance {
          font-variant: small-caps;
          font-size: 1rem;
        }
        hr {
          border-width: 0.5px;
          margin-bottom: 15px;
        }
         {
          /* =====LOCAL STYLES Media Queries===== */
        }
        @media screen and (min-width: 320px) {
          hr {
            width: 90%;
          }
        }
        @media screen and (min-width: 576px) {
          hr {
            width: 96%;
          }
        }
      `}</style>
    </Layout>
  );
};

International.getInitialProps = async () => {
  const my_API = "7467175589024bc6942b178bf2392c5a";
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=34&apiKey=${my_API}`
  );
  const data = await res.json();
  return {
    data: data.articles
  };
};

export default International;
