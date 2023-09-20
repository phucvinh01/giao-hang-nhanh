const { Category } = require("../model/categoryModel");


const categoryController = {
    //create
    create: async (req, res) => {
        const newProduct = new Category(req.body)
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
            const categorys = await Category.find();
            res.status(200).json(categorys);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //get by id
    getById: async (req, res) => {
        try {
            const categorys = await Caterogy.findById(req.params.id);
            res.status(200).json(categorys);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //UPDATE
    updateCaterogy: async (req, res) => {
        try {
            const categorys = await Caterogy.findById(req.params.id);
            await categorys.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //DELETE Caterogy
    deleteCaterogy: async (req, res) => {
        try {
            await Caterogy.findByIdAndDelete(req.params.id);
            res.status(200).json({ "success": true });
        } catch (err) {
            res.status(500).json({ "success": false });
        }
    },
};

module.exports = categoryController;
