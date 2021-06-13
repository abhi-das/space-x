import mongoose from 'mongoose';
import { dbConf } from '../config';

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            }
        }
    ],
    shippingAddress: {
        name: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true }
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema, `${dbConf.orderCollection}`)

export { Order };