import Head from "next/head";
import ProductList from "../../components/products/product-list";
import React from "react";
import globalStyles from "../../styles/globals.module.scss";

const Products = () => {
  return (
    <>
      <Head>
        <title>Products for Sale</title>
        <meta name="description" content="Products for sale" />
      </Head>
      <section className={globalStyles.container}>
        <ProductList />
      </section>
    </>
  );
};

export default Products;
