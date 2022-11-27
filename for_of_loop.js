// Similar to the for in loop but returns the values of the object being iterated
// can only used with objects that are iterable
//  array-like collections of items
// Useful if we're not sure if the object is true array
// for (item of collection) {}
(function () {
    'use strict';
  let arr = [1, 2, 3];

  for (let val of arr) {
    console.log('the value is :', val);

  }
  let mySet = new Set();
  mySet.add('x').add('y').add('z');

  for (let val of mySet){
    console.log(val);

  }

  let myMap = new Map();
  myMap.set('key1','a').set('key2', 'b').set('key3', 'c');

  for (let val of myMap) {
    if (val[1] === 'b') break;
    console.log(val[1]);
    
  }
}());
