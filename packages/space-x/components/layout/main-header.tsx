import CartIcon from "../icons/cart-icon";
import Link from "next/link";
import React from "react";
import RocketIcon from "../icons/rocket-icon";
import SaleIcon from "../icons/sale-icon";
import SignInIcon from "../icons/signin-icon";
import SignUpIcon from "../icons/signup-icon";
import SiteLogoIcon from "../icons/sitelogo-icon";
import styles from "./main-header.module.scss";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={`title ${styles.logo}`}>
        <Link href="/">
          <span className={styles.navLogo} title="Shop Online">
            <SiteLogoIcon />
          </span>
        </Link>
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link href="/launch">
              <span className={styles.navLink} title="Show All Launch">
                <RocketIcon />
              </span>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/products">
              <span className={styles.navLink} title="Products">
                <SaleIcon />
              </span>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/cart">
              <span className={styles.navLink} title="Cart">
                <CartIcon />
              </span>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/signin">
              <span className={styles.navLink} title="Signin">
                <SignInIcon />
              </span>
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/signup">
              <span className={styles.navLink} title="Signup">
                <SignUpIcon />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
