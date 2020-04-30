import { useRouter } from "next/router";
import { Fragment } from "react";

const Footer = () => {
  const router = useRouter();
  const curentRoute = router.route;
  return (
    <Fragment>
      {curentRoute !== "/search" ? (
        <footer>
          <div className="footer-items">
            <div className="footer-copyright">
              <div className="footer-copyright-author">
                <a href="https://github.com/sebagruia" role="button">
                  <h5>
                    Copyright <span className="author">Sebastian Gruia</span>
                  </h5>
                </a>
              </div>
              <div className="footer-copyright-icon">
                <a href="https://github.com/sebagruia" role="button">
                  <img src="/images/iconmonstr-github.png" />
                </a>
              </div>
            </div>
            <div className="powered-by">
              <div className="powered-by-author">
                <a href="https://newsapi.org/" role="button">
                  <h5>
                    Powered By - <span>News API</span>
                  </h5>
                </a>
              </div>
              <div className="powered-by-icon">
                <a href="https://newsapi.org/" role="button">
                  <img src="/images/iconmonstr-brick.png" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      ) : null}

      <style jsx>{`
        footer {
          width: 100%;
          background-color: #000;
        }
        .footer-items {
          max-width: 992px;
          height: 80px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          color: #ededec;
        }
        .footer-copyright {
          display: flex;
          align-items: center;
          margin-left: 20px;
        }
        .footer-copyright-author,
        .powered-by-author {
          margin-right: 10px;
        }
        .author {
          font-variant: small-caps;
          font-size: 1rem;
          font-weight: 600;
        }
        .footer-copyright-author h5 {
          font-family: "Quicksand", sans-serif;
          font-weight: 600;
          font-size: 0.7rem;
        }
        .footer-copyright-icon,
        .powered-by-icon {
          width: 30px;
          height: 30px;
        }
        .powered-by {
          display: flex;
          align-items: center;
          margin-left: auto;
          margin-right: 20px;
        }

        /* =====LOCAL STYLES Media Queries===== */
        @media screen and (max-width: 576px) {
          .footer-items {
            flex-wrap: wrap;
          }
          .author {
            font-variant: small-caps;
            font-size: 0.7rem;
            font-weight: 600;
          }
          .footer-copyright-author h5 {
            font-size: 0.6rem;
          }
          .footer-copyright-icon,
          .powered-by-icon {
            width: 25px;
            height: 25px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Footer;
