const express = require('express');
const path = require("path");
const app = express();
const port = 3000;
const mainRoutes = require("./src/routes/mainRoutes");
const usersRoutes = require("./src/routes/usersRoutes.js");
const productsRoutes = require("./src/routes/productsRoutes.js");

app.use(express.static(path.resolve(__dirname, "./public")));

app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.use("/productos", productsRoutes);

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/views"));
app.listen(process.env.PORT || port, () => console.log(`app listening on port ${port}!`));