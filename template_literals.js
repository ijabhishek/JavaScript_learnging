// Features:
// Multi-line strings
// Expression interpolation


(function () {
    'use strict';
    let template = 'this is a template\nliteral';
    let template1 = `this is a template 
literal`
    console.log(template);
    console.log(template1);

    let a = 'S', b = 'Something';
    console.log(`a is ${a}, While b is ${b} else`);
    

    // function reverse(string) {
    //     return string.split('').reverse().join('');

    // }

    // function buildStr(strings,...values){
    //     return strings[3] + values[2] + strings[1] +
    //     values[0] + strings[0];

    // }


}());
