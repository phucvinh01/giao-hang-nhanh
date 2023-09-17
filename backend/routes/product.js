const productController = require("../controllers/productController");

const router = require("express").Router();

//CRETAE
router.post("/", productController.create);

//GET ALL
router.get("/", productController.getAll);

//GET ONE
router.get("/:id", productController.getById);

//UPDATE 
router.put("/:id", productController.updateProduct);

//DELETE 
router.delete("/:id", productController.deleteProduct);


module.exports = router;