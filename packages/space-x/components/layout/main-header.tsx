import { apiEndPoints } from "../../common/navigation-path";
import { useRouter } from "next/router";
import BagIcon from "../icons/bag-icon";
import Button from "../ui/button";
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
            <Button link="/launch" icon={<RocketIcon />} title="Shoppy">
              Launch
            </Button>
          </li>
          <li className={styles.navListItem}>
            <Button link="/products" icon={<SaleIcon />} title="products">
              Products
            </Button>
          </li>
          <li className={styles.navListItem}>
            <Button link="/cart" icon={<BagIcon />} title="shopping bag">
              Bag
            </Button>
          </li>
          <li className={styles.navListItem}>
            {!userId && (
              <Button link="/signin" icon={<SignInIcon />} title="sign in">
                Sign in
              </Button>
            )}
            {userId && (
              <Button icon={<SignOutIcon />} onClick={signOutHandler} title="sign out">
                Sign out
              </Button>
            )}
          </li>
          {!userId && (
            <li className={styles.navListItem}>
              <Button link="/signup" icon={<SignUpIcon />} title="sign up">
                Sign up
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
