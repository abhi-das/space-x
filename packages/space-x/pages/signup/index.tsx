import { apiEndPoints } from "../../common/navigation-path";
import { useRouter } from "next/router";
import Button from "../../components/ui/button";
import CtaLoader from "../../components/cta-loader/cta-loader";
import Head from "next/head";
import React from "react";
import SiteLogoIcon from "../../components/icons/sitelogo-icon";
import styles from "./signup.module.scss";
import useReq, { ApiResponse } from "../../hooks/use-request";

interface SignupResponse {
  email?: string;
  userId?: string;
  message?: string;
}

const SignUp = () => {
  const [userName, setUserName] = React.useState<string>("");
  const [userEmail, setUserEmail] = React.useState<string>("");
  const [signupResponse, setSignupResponse] = React.useState<SignupResponse>();
  const router = useRouter();

  const onSuccessHandler = (res: ApiResponse) => {
    setSignupResponse(res);
    if (res.userId) {
      router.push("/");
    }
  };
  const payload = {
    url: apiEndPoints.signUp,
    method: "post",
    body: {
      name: userName,
      email: userEmail,
    },
    onSuccess: onSuccessHandler,
  };

  const { doRequest, reqError, loader } = useReq(payload);

  const onSignUp = async (event) => {
    event.preventDefault();
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
            <Button link="/signin" title="sign in">
              Sign-in
            </Button>
            <Button title="sign up">Sign-up</Button>
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
