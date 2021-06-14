import { GetServerSideProps } from "next";
import { apiEndPoints } from "../../common/navigation-path";
import Head from "next/head";
import React from "react";
import axios from "axios";

interface CartProps {
  currentUser?: any;
  error?: string;
}

const Cart = (props: CartProps) => {
  const { currentUser, error } = props;
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="Shopping Cart" />
      </Head>
      <section>
        <h4>Cart Page</h4>
        {currentUser && <p>Show cart item now.</p>}
        {error && <p>{error}</p>}
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (typeof window === "undefined") {
    const reqHeaders = {
      "Access-Control-Allow-Headers": "Origin, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      "Content-Security-Policy": "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "*",
      ...context.req.headers
    };
    try {
      const res = await axios.get(apiEndPoints.currentUser, {
        headers: reqHeaders,
        withCredentials: true,
      });
      const { data } = res;
      return {
        props: {
          currentUser: data,
        },
      };
    } catch (error) {
      return {
        props: {
          error: "Not Aurthorized User!",
        },
      };
    }
  } else {
  }
};

export default Cart;
