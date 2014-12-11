
var util = require("../util");

function submoduleTest () {
	return util.test + " from submodule";
}

module.exports = {
	test : submoduleTest
};