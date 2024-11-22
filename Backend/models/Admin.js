import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    email : {
        type: String,
        unique: true,
    },
    password : String,
    name : String,
    created : {
        type: Date,
        default: Date.now()
    }
});

const adminModel = mongoose.model("Admin", AdminSchema);

export default adminModel;
