import styles from "./Footer.module.css";
import { useRouter } from "next/router";
import { Fragment } from "react";

const Footer = () => {
  const router = useRouter();
  const curentRoute = router.route;
  return (
    <Fragment>
      {curentRoute !== "/search" ? (
        <footer className={styles.footerContainer}>
          <div className={styles.footerItems}>
            <div className={styles.footerCopyright}>
              <div className={styles.footerCopyrightAuthor}>
                <a href="https://github.com/sebagruia" role="button">
                  <h5>
                    Copyright <span className={styles.author}>Sebastian Gruia</span>
                  </h5>
                </a>
              </div>
              <div className={styles.footerCopyrightIcon}>
                <a href="https://github.com/sebagruia" role="button">
                  <img src="/images/iconmonstr-github.png" />
                </a>
              </div>
            </div>
            <div className={styles.poweredBy}>
              <div className={styles.poweredByAuthor}>
                <a href="https://newsapi.org/" role="button">
                  <h5>
                    Powered By - <span>News API</span>
                  </h5>
                </a>
              </div>
              <div className={styles.poweredByIcon}>
                <a href="https://newsapi.org/" role="button">
                  <img src="/images/iconmonstr-brick.png" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      ) : null}
    </Fragment>
  );
};

export default Footer;
