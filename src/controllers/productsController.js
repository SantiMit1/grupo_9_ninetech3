let productos = require("../database/productos");

let controller = {
    carrito: (req, res) => {
        res.render("carrito");
    },

    detalles: (req, res) => {
        const id = Number(req.params.id);
        const producto = productos.find(producto => producto.id === id);
        res.render("detalles", {
            producto: producto
        });
    }
}

module.exports = controller;