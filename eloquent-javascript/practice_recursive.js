'use strict';

function isEven(value) {
    if(value % 2 == 0) {
        return true;
    } 
    return false;
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
