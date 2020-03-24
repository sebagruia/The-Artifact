import PostContainer from "../components/PostContainer";
import PreviewArticle from "../components/PreviewArticle";
import { useRouter } from "next/router";

const Main = props => {
  const router = useRouter();
  const curentRoute = router.route;

  const {
    internationalArticles,
    deutschlandArticles,
    searchArticles,
    postData,
    countryCode,
    categoryValue,
    keyword
  } = props;

  return (
    <main>
      {curentRoute === "/" ? (
        internationalArticles.map((article, index) => (
          <PreviewArticle
            country="us"
            key={`${article.source.id}${article.source.name}${index}`}
            article={article}
          />
        ))
      ) : curentRoute === "/deutschland" ? (
        deutschlandArticles.map((article, index) => (
          <PreviewArticle
            country="de"
            key={`${article.source.id}${article.source.name}${index}`}
            article={article}
          />
        ))
      ) : curentRoute === "/search" ? (
        searchArticles &&
        searchArticles.map((article, index) => (
          <PreviewArticle
            countryCode={countryCode}
            categoryValue={categoryValue}
            keyword={keyword}
            key={`${article.source.id}${article.source.name}${index}`}
            article={article}
          />
        ))
      ) : (
        <PostContainer postData={postData} />
      )}
      <style jsx>{`
        main {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin: 0 auto;
          background-color: #fff;
        }
      `}</style>
    </main>
  );
};

export default Main;
