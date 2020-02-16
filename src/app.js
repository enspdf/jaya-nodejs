const path = require("path");
const express = require("express");
const httpLogger = require("./middlewares/httpLogger");
const userRoute = require("./routes/userRoute");
const sortingRoute = require("./routes/sortingRoute");

const app = express();

app.use(httpLogger);

app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.use("/user", userRoute);
app.use(sortingRoute);

module.exports = app;
