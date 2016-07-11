"use strict";

// Buttons
var showButton = document.querySelector(".show-button");
var changeButton = document.querySelector(".change-button");

showButton.addEventListener("click", function() {
  
  // text content
  var firstName = document.getElementById("first-name").textContent;
  var lastName = document.getElementById("last-name").textContent;
  var fullName = document.getElementById("full-name").textContent;
  
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
  }).call(Person.prototype);
 
  // Object Person
  var bob = new Person("Bob Ross");
  
  document.getElementById("first-name").innerHTML = firstName + bob.getFirstName();
  document.getElementById("last-name").innerHTML = lastName + bob.getLastName();
  document.getElementById("full-name").innerHTML = fullName + bob.getFullName();

});
