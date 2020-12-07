import styles from "./Layout.module.css";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Fragment, useState } from "react";

const Layout = props => {
  const {
    children,
    country,
    categoryValue,
    keyword,
    data
  } = props;


  const [active, setActive] = useState(false);
  const [marginNav, setMarginNav] = useState({ margin: "30px 20px" });
  const [navLinksStyle, SetNavLinksStyle] = useState();

  const onClick = () => {
    if (active===false) {
      setActive(!active);
      setMarginNav({ margin: "30px 20px 120px 20px" });
      SetNavLinksStyle({
        display: "flex",
        left: "150px"
      });
    } else {
      setActive(true);
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
      <div className={styles.container}>
        {children}
        <Main
          data={data}
          country={country}
          categoryValue={categoryValue}
          keyword={keyword}
        />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
