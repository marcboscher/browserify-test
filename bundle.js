require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({

1:[function(require,module,exports){

	var util = require("../util");

	function submoduleTest () {
		return util.test + " from submodule";
	}

	module.exports = {
		test : submoduleTest
	};
	},{"../util":undefined}],


2:[function(require,module,exports){

	var util = require("./util");
	var submodule = require("./a/submodule");

	function mainTest () {
		return util.test + " from main";
	}

	module.exports = {
		test : mainTest
	};
	},{"./a/submodule":1,"./util":undefined}],


"newutilname":[function(require,module,exports){


	function test () {
		return "util ok";
	}

	module.exports = {
		test : test
	};
},{}]},{},[2]);
