const cartController = require('../controllers/cartController')

const router = require("express").Router();

//CRETAE
router.post("/add-to-cart", cartController.addToCart);
router.get("/:id", cartController.getCart);
module.exports = router;