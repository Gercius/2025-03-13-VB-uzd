const ShopItem = require("../models/shopItemModel");

exports.getItems = async (req, res) => {
    try {
        const items = await ShopItem.find();

        if (!items.length) {
            return res.status(404).json({
                status: "Failed",
                message: "No items found",
            });
        }

        res.status(200).json({
            status: "Success",
            results: items.length,
            data: items,
        });
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message,
        });
    }
};

exports.addItem = async (req, res) => {
    try {
        const newItem = await ShopItem.create(req.body);
        res.status(201).json({
            status: "Item Added",
            data: newItem,
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message,
        });
    }
};
