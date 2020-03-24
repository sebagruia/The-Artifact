import PostLink from "../components/PostLink";

const PreviewArticle = props => {
  const { article, country, countryCode, categoryValue, keyword } = props;
  return (
    <article className="preview-container">
      <PostLink
        id={`${article.source.id}${article.source.name}${article.author}`}
        countryCode={countryCode}
        categoryValue={categoryValue}
        keyword={keyword}
        country={country}
      >
        <div className="img-container">
          {article.urlToImage ? (
            <img
              src={article.urlToImage}
              alt="an image relevant to the news article"
            />
          ) : (
            <h5>No Image Available</h5>
          )}
        </div>
      </PostLink>

      <div className="publisher">
        <div className="newspaperIcon-container">
          <img src="/fonts/newspaper.svg"  alt="newspaper icon"/>
        </div>
        <div className="article-source">
          <h5>
            {article.source.name !== null
              ? article.source.name
              : article.author}
          </h5>
        </div>
        <div className="article-time">
          <div className="clock-container">
            <img src="/fonts/clock-regular.svg" alt="clock icon" />
          </div>
          <div className="article-date">
            <p>{article.publishedAt}</p>
          </div>
        </div>
      </div>

      <hr className="article-hr"></hr>
      <PostLink
        id={`${article.source.id}${article.source.name}${article.author}`}
        countryCode={countryCode}
        categoryValue={categoryValue}
        keyword={keyword}
        country={country}
      >
        <h1 className="article-title">{article.title}</h1>
      </PostLink>

      <PostLink
        id={`${article.source.id}${article.source.name}${article.author}`}
        countryCode={countryCode}
        categoryValue={categoryValue}
        keyword={keyword}
        country={country}
      >
        <p className="article-description">{article.description}</p>
      </PostLink>

      <h5 className="author-name">{article.author}</h5>

      {/* =====LOCAL STYLES===== */}
      <style jsx>{`
         
        .preview-container {
          flex:30%;
          max-width:30%;
          border: 1px solid #cccccc;
          margin-bottom: 20px;
        }
        .img-container{
          text-align:center;
        }
        .img-container h5{
          font-family: 'Source Sans Pro',sans-serif;
          font-size:1.5rem;
        }
        .publisher{
              margin:20px 10px;
          }
        .newspaperIcon-container {
          width: 30px;
          height: 30px;
          display: inline-block;
          vertical-align:middle;
          margin-right: 5px;
        }
        .article-source {
          display: inline-block;
          font-size:1.5rem;
          font-family: 'Quicksand', sans-serif;
          margin:0 20px 0 0;
        }
        .article-source h5{
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
        .article-description {
          margin:20px 10px;
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: 400;
          font-size: 0.9rem;
        }
        .author-name{
          margin-left:10px;
        }
        }
        {/* =====LOCAL STYLES Media Queries===== */}
        @media screen and (min-width:320px) {
          .preview-container{
            flex:90%;
            max-width:90%;
          }
        }
          
        @media screen and (min-width:576px) {
            .preview-container{
            flex:45%;
            max-width:45%;
            }
        }
        @media screen and (min-width:992px) {
            .preview-container{
            flex:30%;
            max-width:30%;
            }
        }
      `}</style>
    </article>
  );
};

export default PreviewArticle;
