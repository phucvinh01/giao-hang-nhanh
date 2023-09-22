const { Collection } = require("../model/collectionModel");


const collectionController = {
    //create
    create: async (req, res) => {
        const newProduct = new Collection(req.body)
        try {
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET ALL
    getAll: async (req, res) => {
        try {
            const brands = await Collection.find();
            res.status(200).json(brands);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //get by id
    getById: async (req, res) => {
        try {
            const brands = await Collection.findById(req.params.id);
            res.status(200).json(brands);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //UPDATE
    updateBrand: async (req, res) => {
        try {
            const brands = await Collection.findById(req.params.id);
            await brands.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //DELETE Brand
    deleteBrand: async (req, res) => {
        try {
            await Collection.findByIdAndDelete(req.params.id);
            res.status(200).json({ "success": true });
        } catch (err) {
            res.status(500).json({ "success": false });
        }
    },
};

module.exports = collectionController;
