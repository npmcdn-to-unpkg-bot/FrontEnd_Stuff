'use strict';

var agenda = []
var i;

function addEntry(news, didTurnIntoASquirrel) {
    agenda.push({
        events: news,
        squirrel: didTurnIntoASquirrel
    });
};

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

console.log(agenda);
