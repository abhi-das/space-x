import { products } from "../../data/products";
import ProductItem from "./product-item";
import React from "react";
import styles from "./product-list.module.scss";

const ProductList = (props) => {
  const prodLs = products as Array<ProductItem>;

  return (
    <>
      <div className={styles.productListContainer}>
        {prodLs &&
          prodLs.map((item, i) => (
            <ProductItem item={item} key={`${item.category}-${i}`} />
          ))}
      </div>
    </>
  );
};

export default ProductList;
