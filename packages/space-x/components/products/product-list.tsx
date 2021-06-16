import { ProductItem } from "../../pages/products";
import ProductItemComponent from "./product-item";
import React from "react";
import styles from "./product-list.module.scss";

interface ProductListProps {
  items: Array<ProductItem>;
}

const ProductList = (props: ProductListProps) => {
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
