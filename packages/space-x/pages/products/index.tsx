import Head from "next/head";
import ProductList from "../../components/products/product-list";
import React from "react";

const Products = () => {
  return (
    <>
      <Head>
        <title>Products for Sale</title>
        <meta name="description" content="Products for sale" />
      </Head>
      <section>
        <h1>Latest Phones</h1>
        <ProductList />
      </section>
    </>
  );
};

export default Products;
