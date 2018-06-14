var express = require ("express");
var router = express.Router();
require("./index/index")(router);
module.exports = function(app) {
	app.use("/", router);
}