import Link from "next/link";

const PreviewArticle = ({ article }) => {
  return (
    <article className="preview-container">
      <div className="img-container">
        <img src={article.urlToImage} alt />
      </div>

      <div className="publisher">
        <div className="newspaperIcon-container">
          <img src="/fonts/newspaper.svg" />
        </div>
        <div className="article-author">
          <h5>{article.author !== null ? article.author : article.name}</h5>
        </div>
        <div className="article-time">
          <div className="clock-container">
            <img src="/fonts/clock-regular.svg" />
          </div>
          <div className="article-date">
            <p>{article.publishedAt}</p>
          </div>
        </div>
      </div>

      <hr className="article-hr"></hr>

      <h1 className="article-title">{article.title}</h1>
      <p className="article-description">{article.description}</p>

      <style jsx>{`
         
        .preview-container {
          flex:30%;
          margin:10px 20px;
          border: 1px solid #cccccc;
        }
        .publisher{
              margin:20px
          }
        .newspaperIcon-container {
          width: 30px;
          height: 30px;
          display: inline-block;
          vertical-align:middle;
          margin-right: 5px;
        }
        .article-author {
          display: inline-block;
          font-size:1.5rem;
          font-family: 'Quicksand', sans-serif;
          margin:0 20px 0 0;
        }
        .article-author h5{
            margin:0 20px 0 0;
        }
        .article-time{
            display:flex;
            width: 136px;
            margin-left: 34px;
        }
        .clock-container{
            width: 15px;
            height: 15px;
        }
        .article-date{
            margin:0px;
            font-size: 0.8rem;
            margin-left: 5px;
        }
        .article-date p{
            margin:0;
        }
        .article-hr{
            border-width:0.5px;
            margin-bottom: 15px;
        }
        .article-title {
          font-size: 1.1rem;
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: 400;
          margin:0 10px
        }
        .article-description{
            margin:20px 10px;
            font-family: 'Source Sans Pro', sans-serif;
            font-weight: 400;
            font-size: 0.9rem;
}
        }
        .article-link {
          color: #000;
        }
      `}</style>
    </article>
  );
};

export default PreviewArticle;
