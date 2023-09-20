const categoryController = require('../controllers/categoryController')

const router = require("express").Router();

//CRETAE
router.post("/", categoryController.create);

//GET ALL
router.get("/", categoryController.getAll);

//GET ONE
router.get("/:id", categoryController.getById);

//UPDATE 
router.put("/:id", categoryController.updateCaterogy);

//DELETE 
router.delete("/:id", categoryController.deleteCaterogy);


module.exports = router;