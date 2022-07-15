const express = require("express");
const router = express.Router()
const controller = require("../controllers/productsController")

router.get("/carrito", controller.carrito);
router.get("/detalles/:id", controller.detalles);

module.exports = router;