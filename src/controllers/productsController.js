let controller = {
    carrito: (req, res) => {
        res.render("carrito");
    },

    detalles: (req, res) => {
        res.render("detalles");
    }
}

module.exports = controller;