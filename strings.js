// Strings can be created in different ways:
//  *AS literal strings' - priferred
// * As objects returned from the constructor
// * Java script performs type coercion under the hood when calling methods on primitives
//  Strings is a primitive and primitive don't have properties or methods so the fact that we can look at
//  the length property of string tells us something interesting about javaScript

(function () {
    'use strict';

    let testString = 'this is a test string';
    console.log(testString.length);

    let strArr = testString.split(' ');
    console.log(strArr);
  
    console.log(testString.indexOf('is'));
    console.log(testString.lastIndexOf('is'));
    
    console.log(testString.toUpperCase());

    console.log(testString.substring(8,9));

    console.log(testString.slice(-6)); //substring and slice method work same but 
    // the diff. is in slice we can provide negative number to the slice method

    console.log('     test      '.trim());

}());
