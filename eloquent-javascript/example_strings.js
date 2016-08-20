'use strict';
(function() {
    
    // Pick value direct from terminal
    var numberCows = process.argv[2];
    var numberChickens = process.argv[3];

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

    if(numberChickens == undefined || numberCows == undefined) {
        console.log("Don't forgot to pass a value direct form terminal");
    } else {
        farm(numberCows, numberChickens);
    }
})();
