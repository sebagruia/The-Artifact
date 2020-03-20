import Layout from "../components/Layout";
import PreviewArticle from "../components/PreviewArticle";
import SearchForm from "../components/SearchFrom";
import Main from "../components/Main";
import fetch from "node-fetch";
import React, { useState } from "react";

const Search = () => {
  let [countryValue, setCountryValue] = useState("");
  let [categoryValue, setCategoryValue] = useState("");
  let [keyword, setkeyword] = useState("");
  let [searchResults, setSearchResults] = useState();

  const onChangeCountry = event => {
    countryValue = setCountryValue(event.target.value);
  };
  const onChangeCategory = event => {
    categoryValue = setCategoryValue(event.target.value);
  };
  const onChangeKeyword = event => {
    keyword = setkeyword(event.target.value);
  };

  const onSubmit = async event => {
    const my_API = "7467175589024bc6942b178bf2392c5a";
    event.preventDefault();
    if (countryValue === "" && categoryValue === "" && keyword === "") {
      window.alert("Fill at Least one Field");
    } else {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?pageSize=34&country=${countryValue}&category=${categoryValue}&q=${keyword}&apiKey=${my_API}`
      );
      const data = await res.json();
      setSearchResults(data);
    }
  };

  return (
    <Layout>
      <div className="container">
        <h1 className="page-name">
          Customise your News Feed{" "}
          <span className="enhance">fill at least one field</span>
        </h1>
        <SearchForm
          onChangeCountry={onChangeCountry}
          onChangeCategory={onChangeCategory}
          onChangeKeyword={onChangeKeyword}
          onSubmit={onSubmit}
          countryValue={countryValue}
          categoryValue={categoryValue}
          keyword={keyword}
        />
        <Main>
          {searchResults
            ? searchResults.articles.map((article, index) => (
                <PreviewArticle
                  key={`${article.source.id}${article.source.name}${index}`}
                  article={article}
                />
              ))
            : null}
        </Main>
      </div>

      {/* =====LOCAL STYLES===== */}
      <style jsx>{`
        .container {
          width: 65%;
          margin: 0 auto;
          margin-top: 200px;
        }
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
        main {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin: 0 auto;
          background-color: #fff;
        }
        hr {
          border-width: 0.5px;
          margin-bottom: 15px;
        }

         {/* =====LOCAL STYLES Media Queries===== */}
        @media screen and (min-width: 320px) {
          .container {
            width: 100%;
          }
          hr {
            width: 90%;
          }
        }
        @media screen and (min-width: 576px) {
          hr {
            width: 96%;
          }
        }

     
        @media screen and (min-width: 1200px) {
          .container {
            width: 90%;
          }
        }
        @media screen and (min-width: 1500px) {
          .container {
            width: 75%;
          }
        }
        @media screen and (min-width: 1600px) {
          .container {
            width: 65%;
          }
        }
        
      `}</style>
    </Layout>
  );
};

export default Search;
