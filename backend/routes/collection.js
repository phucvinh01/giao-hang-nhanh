const collectionController = require("../controllers/collectionController");

const router = require("express").Router();

//CRETAE
router.post("/", collectionController.create);

//GET ALL
router.get("/", collectionController.getAll);

//GET ONE
router.get("/:id", collectionController.getById);

//UPDATE 
router.put("/:id", collectionController.updateBrand);

//DELETE 
router.delete("/:id", collectionController.deleteBrand);


module.exports = router;