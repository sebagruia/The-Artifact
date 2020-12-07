import styles from "./Main.module.css";
import PostContainer from "../components/PostContainer";
import PreviewArticle from "../components/PreviewArticle";
import { useRouter } from "next/router";

const Main = (props) => {
  const router = useRouter();
  const curentRoute = router.route;

  const {
    data,
    country,
    categoryValue,
    keyword,
  } = props;

  return (
    <main className={styles.mainContainer}>
      {curentRoute === "/" ? (
        data.map((article, index) => (
          <PreviewArticle
            key={`${article.source.id}${article.source.name}${index}`}
            country="us"
            article={article}
          />
        ))
      ) : curentRoute === "/deutschland" ? (
        data.map((article, index) => (
          <PreviewArticle
            key={`${article.source.id}${article.source.name}${index}`}
            country="de"
            article={article}
          />
        ))
      ) : curentRoute === "/romania" ? (
        data.map((article, index) => (
          <PreviewArticle
            key={`${article.source.id}${article.source.name}${index}`}
            country="ro"
            article={article}
          />
        ))
      ) : curentRoute === "/search" ? (
        data &&
        data.map((article, index) => (
          <PreviewArticle
            key={`${article.source.id}${article.source.name}${index}`}
            country={country}
            categoryValue={categoryValue}
            keyword={keyword}
            article={article}
          />
        ))
      ) : (
        <PostContainer data={data} />
      )}
    </main>
  );
};

export default Main;
