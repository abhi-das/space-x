import mongoose from 'mongoose';
import { dbConf } from '../config';

enum ShippingType {
    Standard_Shipping = "Standard Shipping", 
    USPS_Priority_Mail_Small = "USPS Priority Mail Small",
    USPS_First_Class = "USPS First Class"
}

interface Review {
    name: string;
    rating: string;
    comments: string;
};

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: String, required: true },
    comments: { type: String, required: true }
}, {
    timestamps: true
});

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
    shippingAvailable: Array<ShippingType>,
    shippingCost: string;
    returnPolicy: string;
    review: Array<Review>;
}

interface ProductAttrs {
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
    shippingAvailable: Array<ShippingType>,
    shippingCost: string;
    returnPolicy: string;
    reviews: Array<Review>;
}

interface ProductModel extends mongoose.Model<ProductDoc> {
    buildProduct: (attrs: ProductAttrs) => ProductDoc
}

const productSchema = new mongoose.Schema({
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
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numOfReviews: {
        type: Number,
        required: true,
        default: 0
    },
    shippingAvailable: {
        type: [ShippingType],
        required: true,
    },
    shippingCost: {
        type: String,
        required: true,
        default: 0
    },
    returnPolicy: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

productSchema.statics.buildProduct = (attrs: ProductAttrs) => {
    return new Product(attrs)
};

const Product = mongoose.model<ProductDoc, ProductModel>('Product', productSchema, `${dbConf.productCollection}`);

export { Product };