// BigInt is used to safely work with values outside of the 
// MAX_SAFE_INTEGER range

// BigInts values are primitives and can be created with a constructor or literal form

// Available methods:
// * toLocaleString()
// * toString()
//  *valueOf()


(function () {
    'use strict';

    Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2 

    const veryLargeNumber = BigInt(6465754236974521);
    const veryLargeNumber2 = BigInt('6465754236974521');
    const veryLargeNumber3 = 6465754236974521n;
    BigInt(Number.MAX_SAFE_INTEGER) +  1n === BigInt(Number.MAX_SAFE_INTEGER + 2n); // false

    BigInt(Number.MAX_SAFE_INTEGER) + 1; // TypeError
    BigInt(Number.MAX_SAFE_INTEGER) + 1n; // 6465754236974521n
    5n / 2n; // true

    2n == 2 // ture
    2n === 2; // false
    
}());
