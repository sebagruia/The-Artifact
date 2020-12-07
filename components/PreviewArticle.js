import styles from "./PreviewArticle.module.css";
import PostLink from "../components/PostLink";

const PreviewArticle = (props) => {
  const { article, country, countryCode, categoryValue, keyword } = props;
  return (
    <article className={styles.previewContainer}>
      <PostLink
        article={article}
        title={article.title}
        countryCode={countryCode}
        categoryValue={categoryValue}
        keyword={keyword}
        country={country}
      >
        <div className={styles.imgContainer}>
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

      <div className={styles.publisher}>
        <div className={styles.newspaperIconContainer}>
          <img src="/fonts/newspaper.svg" alt="newspaper icon" />
        </div>
        <div className={styles.articleSource}>
          <h5>
            {article.source.name !== null
              ? article.source.name
              : article.author}
          </h5>
        </div>
        <div className={styles.articleTime}>
          <div className={styles.clockContainer}>
            <img src="/fonts/clock-regular.svg" alt="clock icon" />
          </div>
          <div className={styles.articleDate}>
            <p>{article.publishedAt}</p>
          </div>
        </div>
      </div>

      <hr className={styles.articleHr}></hr>
      <PostLink
        article={article}
        title={article.title}
        countryCode={countryCode}
        categoryValue={categoryValue}
        keyword={keyword}
        country={country}
      >
        <h1 className={styles.articleTitle}>{article.title}</h1>
      </PostLink>

      <PostLink
        article={article}
        title={article.title}
        countryCode={countryCode}
        categoryValue={categoryValue}
        keyword={keyword}
        country={country}
      >
        <p className={styles.articleDescription}>{article.description}</p>
      </PostLink>

      <h5 className={styles.authorName}>{article.author}</h5>

      {/* =====LOCAL STYLES===== */}
    </article>
  );
};

export default PreviewArticle;
