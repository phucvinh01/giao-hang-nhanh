const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        logo: {
            type: String,
        }
    },

);


let Collection = mongoose.model("collection", collectionSchema);

module.exports = { Collection };