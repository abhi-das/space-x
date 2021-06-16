import Head from "next/head";
import ProductList from "../../components/products/product-list";
import React from "react";
import globalStyles from "../../styles/globals.module.scss";
import { GetStaticProps } from "next";
import useReq from "../../hooks/use-request";
import { apiEndPoints } from "../../common/navigation-path";
import { getProducts, ResError } from "../../helpers/api-utils";
import CtaLoader from "../../components/cta-loader/cta-loader";

enum ShippingType {
  /* eslint-disable camelcase */
  STANDARD_SHIPPING = "STANDARD_SHIPPING",
  USPS_PRIORITY_MAIL_SMALL = "USPS_PRIORITY_MAIL_SMALL",
  USPS_First_Class = "USPS_FIRST_CLASS",
}

interface Review {
  name: string;
  rating: string;
  comments: string;
}

export interface ProductItem {
  manufacturer: string;
  name: string;
  condition: string;
  image: string;
  description: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numOfReviews: number;
  shippingAvailable: ShippingType;
  shippingCost: string;
  returnPolicy: string;
  reviews: Array<Review>;
}

interface ProductAttrs {
  items: Array<ProductItem>;
  error?: ResError;
}

type ProductsProps = ProductAttrs;

const Products = (props: ProductsProps) => {

  const { items, error } = props;
  return (
    <>
      <Head>
        <title>Products for Sale</title>
        <meta name="description" content="Products for sale" />
      </Head>
      <section className={globalStyles.container}>
        {(items && items.length > 0) && <ProductList items={items}/> }
        {!items && <CtaLoader />}
        {error && <p className="error">{error.message}</p>}
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async() => {

  const response = await getProducts(apiEndPoints.products);
  if(response instanceof Array) {
    return {
      props: {
        items: response
      },
      revalidate: 60
    }
  }
  return {
    props: {
      errors: response
    }
  }
}

export default Products;
