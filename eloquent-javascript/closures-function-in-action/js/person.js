var Person = function(FirstAndLast) {
    return FirstAndLast;
};

// Closures function : Prototype
(function() {
    this.getFirstName = function() {
        return FirstAndLast.split(" ")[0];
    }
}).call(Person.prototype);
