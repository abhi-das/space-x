import { ProductItem } from "../../pages/products";
import CartIcon from "../icons/cart-icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./product-item.module.scss";

interface ProductOwnAttr {
  item: ProductItem;
}
type ProductAttr = ProductOwnAttr;

const ProductItemComponent = (props: ProductAttr) => {
  const { name, image, description, price } = props.item;
  return (
    <>
      <article className={styles.productItemContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.imageContainer}>
            <Link href="/products/details">
              <a className={styles.imageContent}>
                <Image
                  src={"/" + image}
                  loading={"lazy"}
                  alt={name}
                  title={name}
                  width={113}
                  height={228}
                />
              </a>
            </Link>
          </div>
          <div className={styles.bodyContainer}>
            <h4 className={styles.productName}>{name}</h4>
            <p className={styles.shortDescription}>{description}</p>
            <div className={styles.footer}>
              <p className={styles.price}>{price}</p>
              <button className={`${styles.btn}`}>
                <span className={`${styles.icon} ${styles.link}`}>
                  <CartIcon />
                </span>
                <span className={styles.btnText}>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductItemComponent;
