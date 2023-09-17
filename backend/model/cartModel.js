const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    id_product: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
    total: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
},
    { timestamps: true }

)

export default mongoose.model("cart", cartSchema);
