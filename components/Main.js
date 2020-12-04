import styles from "./Main.module.css";
import PostContainer from "../components/PostContainer";
import PreviewArticle from "../components/PreviewArticle";
import { useRouter } from "next/router";

const Main = (props) => {
  const router = useRouter();
  const curentRoute = router.route;

  const {
    internationalArticles,
    deutschlandArticles,
    romaniaArticles,
    searchArticles,
    postData,
    country,
    categoryValue,
    keyword,
  } = props;

  return (
    <main className={styles.mainContainer}>
      {curentRoute === "/" ? (
        internationalArticles.map((article, index) => (
          <PreviewArticle
            key={`${article.source.id}${article.source.name}${index}`}
            country="us"
            article={article}
          />
        ))
      ) : curentRoute === "/deutschland" ? (
        deutschlandArticles.map((article, index) => (
          <PreviewArticle
            key={`${article.source.id}${article.source.name}${index}`}
            country="de"
            article={article}
          />
        ))
      ) : curentRoute === "/romania" ? (
        romaniaArticles.map((article, index) => (
          <PreviewArticle
            key={`${article.source.id}${article.source.name}${index}`}
            country="ro"
            article={article}
          />
        ))
      ) : curentRoute === "/search" ? (
        searchArticles &&
        searchArticles.map((article, index) => (
          <PreviewArticle
            key={`${article.source.id}${article.source.name}${index}`}
            country={country}
            categoryValue={categoryValue}
            keyword={keyword}
            article={article}
          />
        ))
      ) : (
        <PostContainer postData={postData} />
      )}
    </main>
  );
};

export default Main;
