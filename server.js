const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended : true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("listening on: " + PORT)
});