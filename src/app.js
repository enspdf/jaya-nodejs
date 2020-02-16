const path = require("path");
const express = require("express");
const morgan = require("morgan");
const userRoute = require("./routes/userRoute");
const sortingRoute = require("./routes/sortingRoute");

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.use("/user", userRoute);
app.use(sortingRoute);

module.exports = app;
