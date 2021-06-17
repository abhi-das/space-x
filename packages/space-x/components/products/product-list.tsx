import { ProductItem } from "../../pages/products";
import ProductItemComponent from "./product-item";
import React from "react";
import styles from "./product-list.module.scss";

interface ProductListProps {
  items: Array<ProductItem>;
  layout?: string;
}

const ProductList = (props: ProductListProps) => {
  const { items, layout } = props;

  return (
    <>
      <h1 className={styles.title}>Latest {`${items[0].category}`}</h1>
      <div className={styles.productListContainer}>
        {items &&
          items.map((item, i) => (
            <ProductItemComponent
              item={item}
              key={`${item.category}-${i}`}
              layout={layout}
            />
          ))}
      </div>
    </>
  );
};

export default ProductList;
