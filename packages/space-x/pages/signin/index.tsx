import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import style from "./signin.module.scss";

import { apiEndPoints } from "../../common/navigation-path";
import Button from "../../components/ui/button";
import CtaLoader from "../../components/cta-loader/cta-loader";
import CurrentUserContext from "../../store/currentuser-context";
import SiteLogoIcon from "../../components/icons/sitelogo-icon";
import useReq, { ApiResponse } from "../../hooks/use-request";

const Signin = () => {
  const { updateUserId } = React.useContext(CurrentUserContext);
  const [email, setEmail] = React.useState<string>("");
  const [signinResponse, setSigninResponse] = React.useState<
    ApiResponse | undefined
  >();
  const router = useRouter();
  const onSuccessHandler = (res: ApiResponse) => {
    setSigninResponse(res);
    if (res.userId) {
      updateUserId(res.userId);
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
            <Button link="/signup">Sign-up</Button>
            <Button>Sign in</Button>
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
