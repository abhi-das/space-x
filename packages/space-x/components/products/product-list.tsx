import ProductItemComponent from "./product-item";
import React from "react";
import products from "../../data/products";
import styles from "./product-list.module.scss";
import { ProductItem } from "../../pages/products";

interface ProductListProps {
  items: Array<ProductItem>
}

const ProductList = (props: ProductListProps) => {
  // const prodLs = products as Array<ProductItem>;

  const { items } = props;

  return (
    <>
      <h1 className={styles.title}>Latest Phones</h1>
      <div className={styles.productListContainer}>
        {items &&
          items.map((item, i) => (
            <ProductItemComponent item={item} key={`${item.category}-${i}`} />
          ))}
      </div>
    </>
  );
};

export default ProductList;
