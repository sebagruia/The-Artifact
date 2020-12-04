import styles from "./Romania.module.css";
import Layout from "../components/Layout";

const Romania = ({data}) => {
  return (
    <Layout romaniaArticles={data}>
      <h1 className={styles.pageName}>
        Romania <span className={styles.enhance}>Headlines</span>
      </h1>
      <hr className={styles.hrRomania}></hr>
    </Layout>
  );
};


 export async function getServerSideProps() {
   try{
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=ro&pageSize=21&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
    const data = await res.json();
    return {
      props:{data: data.articles}
      
    };
   }
   catch(error){
    return error;
   }

};

export default Romania;
