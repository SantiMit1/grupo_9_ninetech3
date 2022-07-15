let productos = require("../database/productos")

let controller = {
    index: (req, res) => {
        res.render("home", {
            productos: productos
        });
    }
}

module.exports = controller;