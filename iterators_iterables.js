// The for of loop can be used with any iterable
// * An array is an iterable
//  *a string is an iterable
//  *arguments , map and sets
//  The default behaviour of iterables can be overidden
//  An iterator is an object that provides access to collection of items one at a time
//  All iterators contain a next method
//  This method returns an object with 2 keys:
//  *value- the current value of the iterable
//   *done - true when there are no more values

(function () {
    'use strict';
  
    let mySet = new Set(['a', 'b','c']);
    let setEntries = mySet.entries();

    console.log(setEntries.next());
    console.log(setEntries.next());
    console.log(setEntries.next());
    console.log(setEntries.next());
   
    
}());
