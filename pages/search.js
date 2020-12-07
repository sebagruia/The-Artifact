import styles from "./Search.module.css";
import Layout from "../components/Layout";
import React, { useState } from "react";
import SearchForm from "../components/SearchForm";


const Search = ({data}) => {
  let [country, setCountryCode] = useState("");
  let [categoryValue, setCategoryValue] = useState("");
  let [keyword, setkeyword] = useState("");
  const onChangeCountry = event => {
    country = setCountryCode(event.target.value);
  };
  const onChangeCategory = event => {
    categoryValue = setCategoryValue(event.target.value);
  };
  const onChangeKeyword = event => {
    keyword = setkeyword(event.target.value);
  };


  return (
    <Layout
      data={data}
      country={country}
      categoryValue={categoryValue}
      keyword={keyword}
    >
      <h1 className={styles.pageName}>
        Customise your News Feed{" "}
        <span className={styles.enhance}>fill at least one field</span>
      </h1>
      <SearchForm
        onChangeCountry={onChangeCountry}
        onChangeCategory={onChangeCategory}
        onChangeKeyword={onChangeKeyword}
        country={country}
        categoryValue={categoryValue}
        keyword={keyword}
      />
      <hr className={styles.hrSearch}></hr>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const {query} = context;
  try{
    if (query.country === "" && query.categoryValue === "" && query.keyword === "") {
      window.alert("Fill at Least one Field");
    } else {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?pageSize=34&country=${query.country}&category=${query.categoryValue}&q=${query.keyword}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );
      const data = await res.json();
      return {
        props:{data:data.articles}
        
      }
    }
  }
  catch(error){
    return error;
  }

}

export default Search;
