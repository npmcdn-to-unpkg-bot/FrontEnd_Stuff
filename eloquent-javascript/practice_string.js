'use strict';

var nameTerminal = process.argv[2];
var letterTerminal = process.argv[3];

function countsLetters(name, letter) {
    var i;
    var counts = 0;

    for(i = 0; i < name.length; i++) {
        // Or name[i] == name.charAt(i)
        if(name.charAt(i) == letter) {
            counts++;
        } 
    }
    return counts;
};

if(nameTerminal == undefined || letterTerminal == undefined) {
    console.log("Pass a value direct from terminal");
} else {
    console.log(countsLetters(nameTerminal, letterTerminal));
}
