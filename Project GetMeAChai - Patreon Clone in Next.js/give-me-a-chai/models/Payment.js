import mongoose, { Schema, model, models } from "mongoose";

const PaymentSchema = new Schema({
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    oid: { type: String, required: true },
    message: { type: String },
    amount: { type: Number, required: true },
    createdAT: { type: Date, default: Date.now },
    updatedAT: { type: Date, default: Date.now },
    done: { type: Boolean, default: false },
});

// ✅ Use `models.Payment` to avoid redefining model during hot reload
export default models.Payment || model("Payment", PaymentSchema);
