const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, "./views/home.html")));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, "./views/login.html")));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, "./views/register.html")));
app.get('/detalles', (req, res) => res.sendFile(path.resolve(__dirname, "./views/detalles.html")));
app.get('/carrito', (req, res) => res.sendFile(path.resolve(__dirname, "./views/carrito.html")));
app.use(express.static(path.resolve(__dirname, "./public")))
app.listen(process.env.PORT || port, () => console.log(`app listening on port ${port}!`));