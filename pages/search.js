import Layout from "../components/Layout";
import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import fetch from "isomorphic-unfetch";
import {useRouter} from "next/router";
import Router from "next/router";


const Search = ({data}) => {
  console.log(data);
  const searchArticles = data;
  const router = useRouter();
  console.log(router);
  let [countryCode, setCountryCode] = useState("");
  let [categoryValue, setCategoryValue] = useState("");
  let [keyword, setkeyword] = useState("");
  // let [searchArticles, setSearchResults] = useState();
  const onChangeCountry = event => {
    countryCode = setCountryCode(event.target.value);
  };
  const onChangeCategory = event => {
    categoryValue = setCategoryValue(event.target.value);
  };
  const onChangeKeyword = event => {
    keyword = setkeyword(event.target.value);
  };

  // const onSubmit = async event => {
  //   const my_API = "7467175589024bc6942b178bf2392c5a";
  //   event.preventDefault();
  //   if (countryCode === "" && categoryValue === "" && keyword === "") {
  //     window.alert("Fill at Least one Field");
  //   } else {
  //     const res = await fetch(
  //       `https://newsapi.org/v2/top-headlines?pageSize=34&country=${countryCode}&category=${categoryValue}&q=${keyword}&apiKey=${my_API}`
  //     );
  //     const data = await res.json();
  //     console.log(data.articles);
  //     setSearchResults(data.articles);
  //   }
  // };
  // const onSubmit = (event, countryCode, categoryValue, keyword ) => {
  //   event.preventDefault();
  //   if (countryCode === "" && categoryValue === "" && keyword === "") {
  //     window.alert("Fill at Least one Field");
  //   } else {
  //     Router.push({
  //       pathname:"/search",
  //       query:{
  //         countryCode:countryCode,
  //         categoryValue:categoryValue,
  //         keyword:keyword
  //       }
  //     })
  //   }
  // };

  return (
    <Layout
      searchArticles={searchArticles}
      countryCode={countryCode}
      categoryValue={categoryValue}
      keyword={keyword}
    >
      <h1 className="page-name">
        Customise your News Feed{" "}
        <span className="enhance">fill at least one field</span>
      </h1>
      <SearchForm
        // onSubmit={onSubmit}
        onChangeCountry={onChangeCountry}
        onChangeCategory={onChangeCategory}
        onChangeKeyword={onChangeKeyword}
        countryCode={countryCode}
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

Search.getInitialProps = async (context)=>{
  const {query} = context;
  const my_API = "7467175589024bc6942b178bf2392c5a";
  if (query.countryCode === "" && query.categoryValue === "" && query.keyword === "") {
    window.alert("Fill at Least one Field");
  } else {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?pageSize=34&country=${query.countryCode}&category=${query.categoryValue}&q=${query.keyword}&apiKey=${my_API}`
    );
    const data = await res.json();
    return {
      data:data.articles
    }
    // console.log(data.articles);
    // setSearchResults(data.articles);
  }
}

export default Search;
