"use strict";

// Class person
var Person = function(firstAndLast) {
    // Constructor
    this.firstAndLast = firstAndLast;
};

// Closures function : Prototype
(function() {
    this.getFirstName = function() {
      return this.firstAndLast.split(" ")[0];
    };
    this.getLastName = function() {
      return this.firstAndLast.split(" ")[1];
    };
    this.getFullName = function() {
      return this.firstAndLast;
    };
    this.setFirstName = function(first) {
      this.firstAndLast.split(" ")[0] = first;
    };
    this.setLastName = function(last) {
      this.firstAndLast.split(" ")[1] = last;
    };
    this.setFullName = function(fullName) {
      this.firstAndLast = fullName;
    };
}).call(Person.prototype);

// Buttons
var showButton = document.querySelector("#show-button");
var changeButton = document.querySelector("#change-button");

// Fields 
var firstNameField = document.querySelector("#first-name-field").value;
var lastNameField = document.querySelector("#last-name-field").value;
var fullNameField = document.querySelector("#full-name-field").value;

showButton.addEventListener("click", function(event) {
  
  event.preventDefault();

  // Object Person
  var bob = new Person(fullNameField);
  bob.setFullName(fullNameField);

  document.getElementById("first-name").innerHTML = bob.getFirstName();
  document.getElementById("last-name").innerHTML = bob.getLastName();
  document.getElementById("full-name").innerHTML = bob.getFullName();

});
