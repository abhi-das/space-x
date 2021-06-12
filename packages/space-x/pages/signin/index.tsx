import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import style from "./signin.module.scss";

import { apiEndPoints } from "../../common/navigation-path";
import CtaLoader from "../../components/cta-loader/cta-loader";
import SiteLogoIcon from "../../components/icons/sitelogo-icon";
import useReq, { ApiResponse } from "../../hooks/use-request";

const Signin = () => {
  const [email, setEmail] = React.useState<string>("");

  const [signinResponse, setSigninResponse] = React.useState<
    ApiResponse | undefined
  >();
  const router = useRouter();
  const onSuccessHandler = (res: ApiResponse) => {
    setSigninResponse(res);
    if (res.userId) {
      router.push("/cart");
    }
  };
  const payload = {
    url: apiEndPoints.signIn,
    method: "post",
    body: { email },
    onSuccess: onSuccessHandler,
  };
  const { doRequest, reqError, loader } = useReq(payload);
  const onSubmit = async (event) => {
    event.preventDefault();
    await doRequest();
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
          <div className={`${style.formGroup} ${style.btnContainer}`}>
            <div className={style.row}>
              <Link href="/signup">
                <span className={style.link} title="Signup">
                  Sign-up
                </span>
              </Link>
            </div>
            <input
              className={style.formControl}
              id="submit"
              type="submit"
              value="Sign in"
            />
          </div>
        </form>
        {reqError && <div className={style.error}>{reqError}</div>}
        {loader && <CtaLoader />}
        {signinResponse && signinResponse.message && (
          <p className={style.alert}>{signinResponse.message}</p>
        )}
      </section>
    </>
  );
};

export default Signin;
