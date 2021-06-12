import { apiEndPoints } from "../../common/navigation-path";
import { useRouter } from "next/router";
import CtaLoader from "../../components/cta-loader/cta-loader";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import SiteLogoIcon from "../../components/icons/sitelogo-icon";
import axios from "axios";
import styles from "./signup.module.scss";

interface SignupResponse {
  email?: string;
  userId?: string;
  message?: string;
}

const SignUp = () => {
  const [userName, setUserName] = React.useState<string>("");
  const [userEmail, setUserEmail] = React.useState<string>("");
  const [signInError, setSignInError] = React.useState<string>("");
  const [loader, setLoader] = React.useState<boolean>(false);
  const [signupResponse, setSignupResponse] = React.useState<SignupResponse>();
  const router = useRouter();
  const onSignUp = async (form) => {
    form.preventDefault();
    setLoader(true);
    const options = {
      withCredentials: true,
    };
    try {
      const response = await axios.post(
        apiEndPoints.signUp,
        {
          name: userName,
          email: userEmail,
        },
        options
      );
      setSignupResponse(response.data);
      setLoader(false);
      if (response.data.userId) {
        router.push("/");
      }
    } catch (error) {
      setSignInError("Sign Up error!!");
      setLoader(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <section className={styles.signupFormContainer}>
        <h4 title="Online Shopping Sign up">
          Sign Up
          <span className={styles.logo}>
            <SiteLogoIcon />
          </span>
        </h4>
        <form className={styles.signupForm} onSubmit={onSignUp}>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              <input
                id="name"
                name="name"
                placeholder="Name"
                onChange={(evt) => setUserName(evt.target.value)}
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">
              <input
                id="email"
                name="email"
                placeholder="Email"
                onChange={(evt) => setUserEmail(evt.target.value)}
              />
            </label>
          </div>
          <div className={`${styles.formGroup} ${styles.btnContainer}`}>
            <div className={styles.row}>
              <Link href="/signin">
                <span className={styles.link} title="Signup">
                  Sign-in
                </span>
              </Link>
            </div>
            <div className={styles.row}>
              <input type="submit" value="Sign up" />
            </div>
          </div>
        </form>
        {signInError && <div className={styles.error}>{signInError}</div>}
        {loader && <CtaLoader />}
        {signupResponse && signupResponse.message && (
          <p className={styles.alert}>{signupResponse.message}</p>
        )}
      </section>
    </>
  );
};

export default SignUp;
