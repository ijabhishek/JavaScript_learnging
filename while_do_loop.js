// while loops continue to execute whle a condition remains true
//  while (condition) { }
// While and do while 
// * Both exevute one or more statements while a condition is true 
//  *Statements in a do while will always be executed at least once
//  *Statements in a while loop may never be executed
// *Use break to exit the loop early 


(function () {
    'use strict';

    // While loop

    let count = 0;
    while ( count < 5) {
        if (count === 3) break;
        console.log(count += 1);
    }
    
    // do loop

    let condition = true;

    do {
        console.log('executed once');
        condition = false;
    } while (condition);
}());
