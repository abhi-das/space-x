import { GetStaticProps } from "next";
import { ResError, getProducts } from "../../helpers/api-utils";
import { apiEndPoints } from "../../common/navigation-path";
import CtaLoader from "../../components/cta-loader/cta-loader";
import Head from "next/head";
import ProductList from "../../components/products/product-list";
import React from "react";
import globalStyles from "../../styles/globals.module.scss";

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

export enum ProductCategoryType {
  PHONE = "PHONE",
  REFRIGERATOR = "REFRIGERATOR",
  AC = "AC",
  TELEVISION = "TELEVISION",
}

type ProductsProps = ProductAttrs;

const getProductByCategory = (
  items: Array<ProductItem>,
  category: ProductCategoryType
): Array<ProductItem> => {
  return items.filter(
    (itm) => itm.category.toLowerCase() === category.toLowerCase()
  );
};

const Products = (props: ProductsProps) => {
  const { items, error } = props;
  return (
    <>
      <Head>
        <title>Products for Sale</title>
        <meta name="description" content="Products for sale" />
      </Head>
      <section className={globalStyles.container}>
        {items && items.length > 0 && (
          <ProductList
            items={getProductByCategory(items, ProductCategoryType.PHONE)}
            layout="vTile"
          />
        )}
        {/* TODO:: Add lazy load component logic instead of page load */}
        {items && items.length > 0 && (
          <ProductList
            items={getProductByCategory(
              items,
              ProductCategoryType.REFRIGERATOR
            )}
            layout="hTile"
          />
        )}
        {!items && <CtaLoader />}
        {error && <p className="error">{error.message}</p>}
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await getProducts(apiEndPoints.products);
  if (response instanceof Array) {
    return {
      props: {
        items: response,
      },
      revalidate: 60,
    };
  }
  return {
    props: {
      errors: response,
    },
  };
};

export default Products;
