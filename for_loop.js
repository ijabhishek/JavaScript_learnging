// JavaScript has several loops:
// while / do while
// for / for in /for of

// for loops are useful for iterating arrays
// ex: for (expression1; expression2; expression3;) { }

(function () {
    'use strict';
    let anArray = ['one', 'two', 'three'];
    
    // for (let x = 0; y = anArray.length; x < y; x += 1) { 
    //     console.log(anArray[x]);
    // }
    
    // for (let x = 0; x < anArray.length ; x += 1) { (this is second option we can choose)
    //     console.log(anArray[x]);

    let x = 0;
    for (; ;) {
        if (x >= anArray.length) {
            break;
        }
        console.log(anArray[x]);
        x += 1;

    }
}());
