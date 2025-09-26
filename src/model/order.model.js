import { Schema,model } from 'mongoose';

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required:true },
  items:[
    {
      product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true, default: 1 }
    }
  ],
 total: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered'],
        default: 'Pending',
    },
    payment: {
        method: {
            type: String,
            enum: ['Cash on Delivery', 'Paystack'],
            default: 'Cash on Delivery'
        },
        status: {
            type: String,
            enum: ['Pending', 'Paid', 'Failed'],
            default: 'Pending'
        },
        reference: {
            type: String,
        }
    }
}, { timestamps: true });

const Order = model('Order', orderSchema);

export default Order;
