import Layout from "../../components/Layout";
import Link from "next/link";
import fetch from 'node-fetch';

const Post = (props) => {
  console.log(props)

  return (
    <Layout>
      <div className="container">
        <Link href="/">
          <a role="button" className="all-posts">
            All Posts
          </a>
        </Link>
        <main>
          <div className="publisher">
            <div className="newspaperIcon-container">
              <img src="/fonts/newspaper.svg" />
            </div>
            <div className="article-source">
              <h5>
                {props.postData.source.name !== null
                  ? props.postData.source.name
                  : props.postData.author}
              </h5>
            </div>
            <div className="article-time">
              <div className="clock-container">
                <img src="/fonts/clock-regular.svg" />
              </div>
              <div className="article-date">
                <p>{props.postData.publishedAt}</p>
              </div>
            </div>
          </div>
          <h1 className="article-title">{props.postData.title}</h1>
          <div className="img-container">
            {props.postData.urlToImage ? (
              <img
                src={props.postData.urlToImage}
                alt="an image relevant to the news article"
              />
            ) : (
              <h5>No Image Available</h5>
            )}
          </div>
          <p className="article-content">{props.postData.content}</p>
          <Link href={props.postData.url}>
            <a role="button" className="all-posts">
              Read More
            </a>
          </Link>
        </main>
      </div>

      <style jsx>{`
        .container {
          width: 65%;
          margin: 0 auto;
          margin-top: 200px;
          margin-bottom: 30px;
        }
        .all-posts {
          color: #a4a4a4;
        }
        main {
          width: 100%;
          margin-top: 10px;
          background-color: #fff;
          border: 1px solid #cccccc;
          padding: 20px 100px;
        }
        .publisher {
          margin: 20px 0;
        }
        .newspaperIcon-container {
          width: 30px;
          height: 30px;
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
        }
        .article-source {
          display: inline-block;
          vertical-align: middle;
          font-size: 1.5rem;
          font-family: "Quicksand", sans-serif;
          margin: 0 20px 0 0;
        }
        .article-source h5 {
          margin: 0 20px 0 0;
        }
        .article-time {
          display: inline-block;
          width: 136px;
        }
        .clock-container {
          display: inline-block;
          vertical-align: middle;
          width: 15px;
          height: 15px;
        }
        .article-date {
          display: inline-block;
          padding-top: 4px;
          font-size: 0.8rem;
          margin-left: 5px;
          vertical-align: middle;
        }
        .article-date p {
          margin: 0;
        }
        .article-title {
          font-size: 2rem;
          font-family: "Source Sans Pro", sans-serif;
          font-weight: 600;
          margin: 30px 0 30px 0;
        }
        .img-container {
          text-align: center;
        }
        .img-container h5 {
          font-family: "Source Sans Pro", sans-serif;
          font-size: 1.5rem;
        }

         {
          /* =====LOCAL STYLES Media Queries===== */
        }

        @media screen and (min-width: 320px) {
          .container {
            width: 90%;
            margin-top: 170px;
          }
          main {
            padding: 20px 10px;
          }
          .publisher {
            margin: 5px 0 20px 0;
          }
          .article-title {
            font-size: 1.2rem;
          }
          .article-content {
            font-size: 1rem;
          }
          .article-time {
            display: inline-block;
            width: 136px;
            margin-left: 35px;
          }
        }
        @media screen and (min-width: 576px) {
          .container {
            width: 90%;
          }
          main {
            padding: 20px 35px;
          }
          .article-title {
            font-size: 1.4rem;
          }
        }
        @media screen and (min-width: 768px) {
          .container {
            width: 80%;
          }
          main {
            padding: 20px 30px;
          }
          .article-title {
            font-size: 1.4rem;
          }
        }
        @media screen and (min-width: 992px) {
          .container {
            width: 70%;
          }
          main {
            padding: 20px 50px;
          }
        }
        @media screen and (min-width: 1200px) {
          .container {
            width: 65%;
          }
          main {
            padding: 20px 100px;
          }
          .article-title {
            font-size: 1.8rem;
          }
          .article-content {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </Layout>
  );
};

Post.getInitialProps = async (context) => {
  const id = context.query.id;
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=7467175589024bc6942b178bf2392c5a"
  );
  const data = await res.json();

  const findPost = data.articles.filter(
    article => `${article.source.id} ${article.source.name}` === id
  );

  return {
    postData: findPost[0]
  };
};



export default Post;
