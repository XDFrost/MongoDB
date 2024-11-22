import mongoose from "mongoose";

const SSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    hobbies: {
        type: mongoose.Schema.Types.Mixed
    },
    token: String
})

// mongoose.pluralize(null);            // This line is optional. It prevents mongoose from pluralizing the collection name.

const SModel = mongoose.model("SModel", SSchema);

export default SModel;
