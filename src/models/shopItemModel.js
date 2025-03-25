const mongoose = require("mongoose");

const shopItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    imageUrl: {
        type: String,
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: {
            values: ["RPG", "Dėlionės", "Šaudyklės", "Strateginiai"],
        },
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

shopItemSchema.pre("findOneAndUpdate", function (next) {
    this.set({ updatedAt: Date.now() });
    next();
});

const ShopItem = mongoose.model("ShopItem", shopItemSchema, "items");
module.exports = ShopItem;
