import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import { Fragment, useState } from "react";

const Layout = props => {
  const {
    children,
    countryCode,
    categoryValue,
    keyword,
    internationalArticles,
    deutschlandArticles,
    romaniaArticles,
    searchArticles,
    postData
  } = props;

  const [active, setActive] = useState("");
  const [marginNav, setMarginNav] = useState({ margin: "30px 20px" });
  const [navLinksStyle, SetNavLinksStyle] = useState();

  const onClick = () => {
    if (active === "") {
      setActive("is-active");
      setMarginNav({ margin: "30px 20px 120px 20px" });
      SetNavLinksStyle({
        display: "flex",
        left: "150px"
      });
    } else {
      setActive("");
      setMarginNav({ margin: "30px 20px" });
      SetNavLinksStyle({ display: "none" });
    }
  };

  return (
    <Fragment>
      <Head>
        <title>The Artifact|News Feed</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The Most Reliable News Feed" />
        <meta
          name="author"
          content="Sebastian Gruia https://sebagruia.github.io/SebastianGruia-Project-Page/"
        />
        <link rel="icon" href="/images/logo_black.png"></link>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Quicksand:300,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Rajdhani&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header
        onClick={onClick}
        marginNav={marginNav}
        navLinksStyle={navLinksStyle}
        active={active}
      />
      <div className="container">
        {children}
        <Main
          internationalArticles={internationalArticles}
          deutschlandArticles={deutschlandArticles}
          romaniaArticles={romaniaArticles}
          searchArticles={searchArticles}
          postData={postData}
          countryCode={countryCode}
          categoryValue={categoryValue}
          keyword={keyword}
        />
      </div>

      {/* =====LOCAL STYLES===== */}
      <style jsx>{`
        .container {
          width: 65%;
          margin: 0 auto;
          margin-top: 180px;
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
        header {
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          width: 100%;
          margin: 0 auto;
          justify-content: center;
          background-color: #000;
        }

        .nav {
          position: relative;
          display: flex;
          width: 992px;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin: 40px 20px;
        }
        .nav-logo {
          display: flex;
          margin-right: auto;
        }
        .nav-links {
          display: flex;
          height: 50px;
          align-items: flex-end;
          font-size: 1.1rem;
          padding-top: 11px;
        }
        .nav-links a {
          padding-right: 10px;
        }
        .box-logo {
          width: 70px;
          height: auto;
          margin-right: 10px;
        }

        .logo-text h1,
        .logo-text h5 {
          margin: -8px 0 0 0;
          color: #ededec;
        }
        .logo-text h1 {
          font-size: 2.8rem;
          font-variant: small-caps;
        }
        .logo-text h5 {
          font-family: "Quicksand", sans-serif;
          font-weight: 300;
          font-size: 1rem;
        }
         {
          /* @link https://github.com/jonsuh/hamburgers */
        }
        .hamburger {
          padding: 7px 7px;
          display: none;
          cursor: pointer;
          transition-property: opacity, filter;
          transition-duration: 0.15s;
          transition-timing-function: linear;
          font: inherit;
          color: inherit;
          text-transform: none;
          background-color: transparent;
          border: 0;
          margin: 0;
          overflow: visible;
        }

        .hamburger.is-active .hamburger-inner,
        .hamburger.is-active .hamburger-inner::before,
        .hamburger.is-active .hamburger-inner::after {
          background-color: #ededec;
        }

        .hamburger-box {
          width: 24px;
          height: 20px;
          display: inline-block;
          position: relative;
        }

        .hamburger-inner {
          display: block;
          top: 50%;
        }

        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
          width: 24px;
          height: 1.5px;
          background-color: #ededec;
          border-radius: 4px;
          position: absolute;
          transition-property: transform;
          transition-duration: 0.15s;
          transition-timing-function: ease;
        }

        .hamburger-inner::before,
        .hamburger-inner::after {
          content: "";
          display: block;
        }

        .hamburger-inner::before {
          top: -10px;
        }

        .hamburger-inner::after {
          bottom: -10px;
        }

        /* Spin */

        .hamburger--spin .hamburger-inner {
          transition-duration: 0.22s;
          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        .hamburger--spin .hamburger-inner::before {
          transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
        }
        .hamburger--spin .hamburger-inner::after {
          transition: bottom 0.1s 0.25s ease-in,
            transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }

        .hamburger--spin.is-active .hamburger-inner {
          transform: rotate(225deg);
          transition-delay: 0.12s;
          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .hamburger--spin.is-active .hamburger-inner::before {
          top: 0;
          opacity: 0;
          transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
        }
        .hamburger--spin.is-active .hamburger-inner::after {
          bottom: 0;
          transform: rotate(-90deg);
          transition: bottom 0.1s ease-out,
            transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

         {
          /* =====LOCAL STYLES Media Queries===== */
        }
        @media screen and (min-width: 320px) {
          .container {
            width: 100%;
            margin-top: 190px;
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

      {/* =====GLOBAL STYLES===== */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: "Open Sans Condensed", sans-serif;
          font-size: 16px;
          background-color: #fff;
        }
        a {
          color: #ededec;
          text-decoration: none;
        }
        a:hover {
          color: #72c1bf;
        }
        .link-to-post,
        .link-to-post:hover {
          color: #000;
        }
        .search-icon img {
          width: 20px;
          padding-left: 5px;
        }
        .all-posts,
        .all-posts:hover,
        .search-icon img:hover {
          color: #a4a4a4;
        }
        img {
          width: 100%;
        }
      `}</style>
    </Fragment>
  );
};

export default Layout;
