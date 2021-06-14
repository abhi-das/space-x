import ProductItemComponent, { ProductItem } from "./product-item";
import React from "react";
import products from "../../data/products";
import styles from "./product-list.module.scss";

const ProductList = (props) => {
  const prodLs = products as Array<ProductItem>;

  return (
    <>
      <h1 className={styles.title}>Latest Phones</h1>
      <div className={styles.productListContainer}>
        {prodLs &&
          prodLs.map((item, i) => (
            <ProductItemComponent item={item} key={`${item.category}-${i}`} />
          ))}
      </div>
    </>
  );
};

export default ProductList;
