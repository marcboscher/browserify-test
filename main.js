
var util = require("./util");
var submodule = require("./a/submodule");

function mainTest () {
	return util.test + " from main";
}

module.exports = {
	test : mainTest
};