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
      searchArticles={data}
      country={country}
      categoryValue={categoryValue}
      keyword={keyword}
    >
      <h1 className="page-name">
        Customise your News Feed{" "}
        <span className="enhance">fill at least one field</span>
      </h1>
      <SearchForm
        onChangeCountry={onChangeCountry}
        onChangeCategory={onChangeCategory}
        onChangeKeyword={onChangeKeyword}
        country={country}
        categoryValue={categoryValue}
        keyword={keyword}
      />
      <hr></hr>

      {/* =====LOCAL STYLES===== */}
      <style jsx>{`
        .page-name {
          margin-left: 17px;
          text-align: left;
          font-family: "Quicksand", sans-serif;
          font-weight: 400;
          font-variant: small-caps;
        }
        .page-name .enhance {
          font-variant: small-caps;
          font-size: 1rem;
        }
        hr {
          border-width: 0.5px;
          margin-bottom: 15px;
        }

         {
          /* =====LOCAL STYLES Media Queries===== */
        }
        @media screen and (min-width: 320px) {
          hr {
            width: 90%;
          }
        }
        @media screen and (min-width: 576px) {
          hr {
            width: 96%;
          }
        }
      `}</style>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const {query} = context;
  console.log(query);
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

export default Search;
