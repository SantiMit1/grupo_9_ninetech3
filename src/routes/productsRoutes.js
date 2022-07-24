const express = require("express");
const router = express.Router()
const controller = require("../controllers/productsController")

router.get("/", controller.productos);
router.get("/carrito", controller.carrito);
router.get("/detalles/:id", controller.detalles);

router.get("/crear", controller.crear)
router.get("/detalles/:id/editar", controller.editar)

module.exports = router;