import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    username: String,
    email: String,
    razorpayid: String,
    razorpaysecret: String,
    // Add any other fields here
});

// Avoid redefining model during hot reloads
export default models.User || model("User", UserSchema);
