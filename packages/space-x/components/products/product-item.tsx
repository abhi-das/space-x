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

interface ProductItem {
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

type ProductItemAttr = {
  item: ProductItem;
};

const ProductItem = (props: ProductItemAttr) => {
  const { name, image, description, price } = props.item;
  return (
    <>
      <article className={styles.productItemContainer}>
        <div className={styles.imageContainer}>
          <Link href={"/products/details"}>
            <Image
              src={`/${image}`}
              loading={"lazy"}
              alt={name}
              title={name}
              width={300}
              height={260}
            />
          </Link>
        </div>
        <div>
          <h4>{name}</h4>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </article>
    </>
  );
};

export default ProductItem;
