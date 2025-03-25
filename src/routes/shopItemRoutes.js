const { Router } = require("express");
const productController = require("../controllers/shopItemController");

const router = Router();

// prettier-ignore
router.route('/')
    .get(productController.getItems)
    .post(productController.addItem);

module.exports = router;
