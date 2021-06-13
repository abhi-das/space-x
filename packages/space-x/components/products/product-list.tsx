import ProductItemComponent, { ProductItem } from "./product-item";
import React from "react";
import products from "../../data/products";
import styles from "./product-list.module.scss";

const ProductList = (props) => {
  const prodLs = products as Array<ProductItem>;

  return (
    <>
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
