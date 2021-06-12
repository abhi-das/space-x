import { apiEndPoints } from "../../common/navigation-path";
import { useRouter } from "next/router";
import CtaLoader from "../../components/cta-loader/cta-loader";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import SiteLogoIcon from "../../components/icons/sitelogo-icon";
import styles from "./signup.module.scss";
import useReq, { ApiErrorResponse, ApiResponse } from "../../hooks/use-request";

interface SignupResponse {
  email?: string;
  userId?: string;
  message?: string;
}

const SignUp = () => {
  const [userName, setUserName] = React.useState<string>("");
  const [userEmail, setUserEmail] = React.useState<string>("");
  const [loader, setLoader] = React.useState<boolean>(false);
  const [signupResponse, setSignupResponse] = React.useState<SignupResponse>();
  const router = useRouter();

  const onSuccessHandler = (res: ApiResponse) => {
    setSignupResponse(res);
    setLoader(false);
    if (res.userId) {
        router.push("/");
    }
  };
  const onErrorHandler = (res: ApiErrorResponse) => {
    setLoader(false);
  }
  const payload = {
      url: apiEndPoints.signUp,
      method: 'post',
      body: {
        name: userName,
        email: userEmail,
      },
      onSuccess: onSuccessHandler,
      onError: onErrorHandler
  }

  const {doRequest, reqError } = useReq(payload);

  const onSignUp = async (event) => {
    event.preventDefault();
    setLoader(true);
    await doRequest();
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
        {reqError && <div className={styles.error}>{reqError}</div>}
        {loader && <CtaLoader />}
        {signupResponse && signupResponse.message && (
          <p className={styles.alert}>{signupResponse.message}</p>
        )}
      </section>
    </>
  );
};

export default SignUp;
