import styles from "./Deutschland.module.css";
import Layout from "../components/Layout";

const Deutschland = ({data}) => {
  return (
    <Layout data={data}>
      <h1 className={styles.pageName}>
        Deutschland <span className={styles.enhance}>Headlines</span>
      </h1>
      <hr className={styles.hrDeutschland}></hr>
    </Layout>
  );
};

export async function getStaticProps () {
  try{
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=de&pageSize=21&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
    const data = await res.json();
    return {
      props:{data: data.articles},
      revalidate: 1, // In seconds 
    };
  }
  catch(error){
    return error;
  }
};

export default Deutschland;
