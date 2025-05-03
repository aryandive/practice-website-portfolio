import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    email: { type: String, required: tru },
    name: { type: String },
    username: { type: String, required: true },
    Profilepic: { type: String },
    coverpic: { type: String },
    createdAT: { type: Date, default: Date.now },
    updatedAT: { type: Date, default: Date.now },
});

export default mongoose.models.User || model("User", UserSchema);