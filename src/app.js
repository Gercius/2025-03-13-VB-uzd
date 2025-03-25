const express = require("express");
const itemRouter = require("./routes/shopItemRoutes");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

app.use("/api/item", itemRouter);

module.exports = { app };
