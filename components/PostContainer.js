import styles from "./PostContainer.module.css";
import Link from "next/link";

const PostContainer = ({ data }) => {
  return (
    <div className={styles.postContainer}>
      <Link href="/">
        <a role="button" className={styles.allPosts}>
          All Articles
        </a>
      </Link>
      <div className={styles.publisher}>
        <div className={styles.newspaperIconContainer}>
          <img src="/fonts/newspaper.svg" alt="newspaper icon" />
        </div>
        <div className={styles.articleSource}>
          <h5>
            {data.source.name !== null
              ? data.source.name
              : data.author}
          </h5>
        </div>
        <div className={styles.articleTime}>
          <div className={styles.clockContainer}>
            <img src="/fonts/clock-regular.svg" alt="clock icon" />
          </div>
          <div className={styles.articleDate}>
            <p>{data.publishedAt}</p>
          </div>
        </div>
      </div>
      <h1 className={styles.articleTitle}>{data.title}</h1>
      <div className={styles.imgContainer}>
        {data.urlToImage ? (
          <img
            src={data.urlToImage}
            alt="an image relevant to the news article"
          />
        ) : (
          <h5>No Image Available</h5>
        )}
      </div>
      <p className={styles.articleContent}>{data.content}</p>
      <a href={data.url} role="button" className={styles.allPosts}>
        Read More
      </a>
    </div>
  );
};

export default PostContainer;
