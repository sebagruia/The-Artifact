import styles from "./Header.module.css"
import Link from "next/link";

const Header = ({onClick,marginNav,navLinksStyle,active})=>{
    return(
        <header className={styles.headerContainer}>
        <ul className={styles.nav} style={marginNav}>
          <Link href="/">
          <li className={styles.navLogo}>
            <div className={styles.boxLogo}>
              <img src="/images/logo_white.png" alt="A white box" />
            </div>
            <div className={styles.logoText}>
              <h1>The Artifact</h1>
              <h5>News You Can Trust</h5>
            </div>
          </li>
          </Link>
          
          <li className={styles.navLinks} style={navLinksStyle}>
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
              <Link href="/romania">
                <a role="button">Romania</a>
              </Link>
            </div>

            <div>
              <Link href="/search">
                <a role="button" className={styles.searchIcon}>
                  <img src="/fonts/searchIcon.png" alt="magnifier" />
                </a>
              </Link>
            </div>
          </li>
        </ul>
        <button
          onClick={()=>onClick()}
          className={`${styles.hamburger} ${styles.hamburgerSpin} ${active && styles.isActive}`}
          type="button"
        >
          <span className={styles.hamburgerBox}>
            <span className={styles.hamburgerInner}></span>
          </span>
        </button>
      </header>
    );
}

export default Header;