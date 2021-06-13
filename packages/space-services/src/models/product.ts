import { dbConf } from '../config';
import mongoose from 'mongoose';

enum ShippingType {
  /* eslint-disable camelcase */
  STANDARD_SHIPPING = 'STANDARD_SHIPPING',
  USPS_PRIORITY_MAIL_SMALL = 'USPS_PRIORITY_MAIL_SMALL',
  USPS_First_Class = 'USPS_FIRST_CLASS',
}

interface Review {
    name: string;
    rating: string;
    comments: string;
}

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: String, required: true },
    comments: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

interface ProductDoc extends mongoose.Document {
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

interface ProductModel extends mongoose.Model<ProductDoc> {
  buildProduct: (attrs: ProductItem) => ProductDoc;
}

const productSchema = new mongoose.Schema(
  {
    manufacturer: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
      default: 0,
    },
    countInStock: {
        type: Number,
        required: true,
      default: 0,
    },
    rating: {
        type: Number,
        required: true,
      default: 0,
    },
    numOfReviews: {
        type: Number,
        required: true,
      default: 0,
    },
    shippingAvailable: {
      type: ShippingType,
      enum: Object.values(ShippingType),
        required: true,
    },
    shippingCost: {
        type: String,
        required: true,
      default: 0,
    },
    returnPolicy: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  },
);
/* eslint-disable @typescript-eslint/no-use-before-define */
productSchema.statics.buildProduct = (attrs: ProductItem) => {
  return new Product(attrs);
};

const Product = mongoose.model<ProductDoc, ProductModel>(
  'Product',
  productSchema,
  `${dbConf.productCollection}`,
);

export { Product, ProductItem };
