const orderController = require('../controllers/orderController')

const router = require("express").Router();

//CRETAE
router.post("/add-to-order", orderController.addOrder);
router.get("/", orderController.getAll);
router.get("/:id", orderController.getById);
module.exports = router;