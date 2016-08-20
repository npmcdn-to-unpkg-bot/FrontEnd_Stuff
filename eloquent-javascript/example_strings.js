'use strict';
(function() {
         
    // Pick value direct from terminal
    var numberCows = process.argv[2];
    var numberChickens = process.argv[3];
    var numberPigs = process.argv[4];

    // Refatoring
    /*
    function farm(cows, chickens) {
        var strCows = String(cows);
        var strChickens = String(chickens);

        while(strCows.length < 3)
            strCows = "0" + strCows;
        console.log(strCows);
        
        while(strChickens.length < 3)
            strChickens = "0" + strChickens;
        console.log(strChickens);
    }
    */

    function zeroPad(number, width) {
        var strNumber = String(number);
        while(strNumber.length < width)
            strNumber = "0" + strNumber;
        return strNumber;
    };

    function farmInventory(cows, chickens, pigs) {
        console.log(zeroPad(cows, 3) + " Cows");
        console.log(zeroPad(chickens, 4) + " Chickens")
        console.log(zeroPad(pigs, 5) + " Pigs")
    };

    if(numberChickens == undefined || numberCows == undefined || numberPigs == undefined) {
        console.log("Don't forgot to pass a value direct form terminal");
    } else {
        farmInventory(numberCows, numberChickens, numberPigs);
    }
})();
