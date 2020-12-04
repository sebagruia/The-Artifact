import styles from "./Home.module.css";
import Layout from "../components/Layout";
const International = ({data}) => {
  return (
    <Layout internationalArticles={data}>
      <h1 className={styles.pageName}>
        International <span className={styles.enhance}>Headlines</span>
      </h1>
      <hr className={styles.homeHr}></hr>
    </Layout>
  );
};

export async function getServerSideProps () {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=34&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {data: data.articles}
    
  };
};

export default International;
