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
    try {
      const res = await axios.get(apiEndPoints.currentUser, {
        headers: context.req.headers,
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
