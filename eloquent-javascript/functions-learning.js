'use strict';

/* global variables */
var i, objName, obj, objLocation, anon;
var firstName = "Ismael";
var lastName = "Ezequiel";
var list = ["One", "Two", "Three", "Four", "Five"];
var listLenght = list.length;

/*-----------------------------------------------------
				Self invoking functions
-------------------------------------------------------*/

(function () {
	for(i = 0; i < listLenght; i++) {
		console.log("From self invoking function: " + list[i]);
	};
})();

/*-----------------------------------------------------
	 			Closure Functions
-------------------------------------------------------*/

function showName (firstName) {
	/* local variables */
	var into = "Hello, ";
	var end = " from CLOSURE FUNCTION"

	function makeName (lastName) {
		return into + firstName + lastName + end;
	}

	return makeName;
};

var objName = showName(firstName);
var obj = makeName(lastName);
console.log(obj);

/*-----------------------------------------------------
				Getters and Setters
-------------------------------------------------------*/

function getLocation() {
	/* local variable */
	var local = "San Francisco, from Get and Set";

	return {
		get: function () {
			console.log(local);
		},
		set: function (newLocal) {
			local = newLocal;
		}
	}
};

var objLocation = getLocation();
objLocation.get();
objLocation.set();

/*-----------------------------------------------------
				Annonymous Functions
-------------------------------------------------------*/

var anon = function () {
	for(i = 0; i < 10; i++) {
		console.log("From Annonymous Function:" + i);
	}
};