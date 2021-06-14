import { apiEndPoints } from "../../common/navigation-path";
import { useRouter } from "next/router";
import BagIcon from "../icons/bag-icon";
import CurrentUserContext from "../../store/currentuser-context";
import Link from "next/link";
import React from "react";
import RocketIcon from "../icons/rocket-icon";
import SaleIcon from "../icons/sale-icon";
import SignInIcon from "../icons/signin-icon";
import SignOutIcon from "../icons/signout-icon";
import SignUpIcon from "../icons/signup-icon";
import SiteLogoIcon from "../icons/sitelogo-icon";
import styles from "./main-header.module.scss";
import useReq from "../../hooks/use-request";

const MainHeader = () => {
  const { userId, updateUserId } = React.useContext(CurrentUserContext);
  const router = useRouter();
  const payload = {
    url: apiEndPoints.signOut,
    method: "post",
    onSuccess: () => {
      updateUserId(null);
      router.push("/");
    },
  };
  const { doRequest } = useReq(payload);
  const signOutHandler = async () => {
    await doRequest();
  };

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
                <BagIcon />
              </span>
            </Link>
          </li>
          <li className={styles.navListItem}>
            {!userId && (
              <Link href="/signin">
                <span className={styles.navLink} title="Sign in">
                  <SignInIcon />
                </span>
              </Link>
            )}
            {userId && (
              <button className={styles.btn} onClick={signOutHandler}>
                <span className={styles.navLink} title="Sign out">
                  <SignOutIcon />
                </span>
              </button>
            )}
          </li>
          {!userId && (
            <li className={styles.navListItem}>
              <Link href="/signup">
                <span className={styles.navLink} title="Signup">
                  <SignUpIcon />
                </span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
