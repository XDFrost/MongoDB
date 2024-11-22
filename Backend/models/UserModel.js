import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    email : {
        type: String,
        unique: true,
    },
    
    password : String,
    
    name : String,
    
    products: mongoose.Schema.Types.ObjectId,

    created : {
        type: Date,
        default: Date.now()
    }
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;
