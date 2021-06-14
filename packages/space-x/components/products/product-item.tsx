import CartIcon from "../icons/cart-icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./product-item.module.scss";

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
              <div>
                <Image
                  src={"/" + image}
                  loading={"lazy"}
                  alt={name}
                  title={name}
                  width={113}
                  height={228}
                />
              </div>
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
                </span>{" "}
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductItemComponent;
