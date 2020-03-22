import Link from "next/link";

const Header = ({onClick,marginNav,navLinksStyle,active})=>{
    return(
        <header>
        <ul className="nav" style={marginNav}>
          <Link href="/">
          <li className="nav-logo">
            <div className="box-logo">
              <img src="/images/logo_white.png" alt="A white box" />
            </div>
            <div className="logo-text">
              <h1>The Artifact</h1>
              <h5>News You Can Trust</h5>
            </div>
          </li>
          </Link>
          
          <li className="nav-links" style={navLinksStyle}>
            <div>
              <Link href="/">
                <a role="button">International</a>
              </Link>
            </div>

            <div>
              <Link href="/deutschland">
                <a role="button">Deutschland</a>
              </Link>
            </div>

            <div>
              <Link href="/search">
                <a role="button" className="search-icon">
                  <img src="/fonts/searchIcon.png" alt="magnifier" />
                </a>
              </Link>
            </div>
          </li>
        </ul>
        <button
          onClick={()=>onClick()}
          className={`hamburger hamburger--spin ${active}`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <style jsx>{`
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
          transition: margin 0.3s;
        }
        .nav-logo {
          display: flex;
          margin-right: auto;
          cursor:pointer;
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
         {/* @link https://github.com/jonsuh/hamburgers */}
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
        @media screen and (max-width: 576px) {
          .nav {
            flex-wrap: wrap;
          }
          .nav-logo {
          }

          .nav-links {
            flex-direction: column;
            display: none;
          }
          .nav-links {
            position: absolute;
            top: 60px;
            left: 650px;
          }
          .nav-links div {
            padding: 2px 0;
          }

          .hamburger {
            position: absolute;
            display: inline-block;
            right: 25px;
            top: 25px;
          }
        }
        `}</style>
      </header>
    );
}

export default Header;