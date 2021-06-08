import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import style from "./signin.module.scss";

import { apiEndPoints } from "../../common/navigation-path";
import CtaLoader from "../../components/cta-loader/cta-loader";
import SiteLogoIcon from "../../components/icons/sitelogo-icon";
import axios from "axios";

interface SigninResponse {
  userId?: string;
  message?: string;
}

const Signup = () => {
  const [email, setEmail] = React.useState<string>("");
  const [signInError, setSignInError] = React.useState<string>("");
  const [loader, setLoader] = React.useState<boolean>(false);
  const [signinResponse, setSigninResponse] = React.useState<
    SigninResponse | undefined
  >();
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    const options = {
      withCredentials: true,
    };
    try {
      const response = await axios.post(
        apiEndPoints.signIn,
        {
          email,
        },
        options
      );
      setSigninResponse(response.data);
      setLoader(false);
      if (response.data.userId) {
        router.push("/cart");
      }
    } catch (error) {
      setSignInError("SignIn error!!");
      setLoader(false);
    }
  };

  return (
    <>
      <Head>
        <title>Signin User</title>
        <meta name="description" content="Signin user for sale" />
      </Head>
      <section className={style.signinFormContainer}>
        <form className={style.signinForm} onSubmit={onSubmit}>
          <h4 title="Shop Online">
            Hey get me in
            <span className={style.logo}>
              <SiteLogoIcon />
            </span>
          </h4>
          <div className={style.formGroup}>
            <label htmlFor="email">
              <input
                className={style.formControl}
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={"email@email.com"}
                type="email"
              />
            </label>
          </div>
          <div className={style.formGroup}>
            <input
              className={style.formControl}
              id="submit"
              type="submit"
              value="Sign in"
            />
          </div>
        </form>
        {signInError && <div className={style.error}>{signInError}</div>}
        {loader && <CtaLoader />}
        {signinResponse && signinResponse.message && (
          <p className={style.alert}>{signinResponse.message}</p>
        )}
      </section>
    </>
  );
};

export default Signup;
