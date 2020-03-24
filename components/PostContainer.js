import Link from "next/link";

const PostContainer = ({ postData }) => {
  return (
    <div className="post-container">
      <Link href="/">
        <a role="button" className="all-posts">
          All Articles
        </a>
      </Link>
      <div className="publisher">
        <div className="newspaperIcon-container">
          <img src="/fonts/newspaper.svg" alt="newspaper icon" />
        </div>
        <div className="article-source">
          <h5>
            {postData.source.name !== null
              ? postData.source.name
              : postData.author}
          </h5>
        </div>
        <div className="article-time">
          <div className="clock-container">
            <img src="/fonts/clock-regular.svg" alt="clock icon" />
          </div>
          <div className="article-date">
            <p>{postData.publishedAt}</p>
          </div>
        </div>
      </div>
      <h1 className="article-title">{postData.title}</h1>
      <div className="img-container">
        {postData.urlToImage ? (
          <img
            src={postData.urlToImage}
            alt="an image relevant to the news article"
          />
        ) : (
          <h5>No Image Available</h5>
        )}
      </div>
      <p className="article-content">{postData.content}</p>
      <a href={postData.url} role="button" className="all-posts">
        Read More
      </a>

      <style jsx>{`
        .post-container {
          width: 65%;
          margin: 0 auto;
          margin-bottom: 30px;
          border: 1px solid #cccccc;
          padding: 20px 100px;
        }
        .all-posts {
          color: #a4a4a4;
        }
        .publisher {
          margin: 20px 0;
        }
        .newspaperIcon-container {
          width: 30px;
          height: 30px;
          display: inline-block;
          vertical-align: middle;
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
          .post-container {
            width: 90%;
            padding: 20px 10px;
          }
          .publisher {
            margin: 20px 0 20px 0;
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
          .post-container {
            padding: 20px 35px;
          }

          .article-title {
            font-size: 1.4rem;
          }
        }
        @media screen and (min-width: 768px) {
          .post-container {
            padding: 20px 30px;
          }
          .article-title {
            font-size: 1.4rem;
          }
        }
        @media screen and (min-width: 992px) {
          .post-container {
            padding: 20px 50px;
          }
        }
        @media screen and (min-width: 1200px) {
          .post-container {
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
    </div>
  );
};

export default PostContainer;
