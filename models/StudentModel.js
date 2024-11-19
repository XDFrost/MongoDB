import mongoose from "mongoose";

const SSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

const SModel = mongoose.model("SModel", SSchema);

export default SModel;
