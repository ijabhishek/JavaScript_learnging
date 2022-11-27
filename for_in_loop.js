// Useful for iterating over the properties of an object
// for (expression) { }

(function () {
    'use strict';
    let obj = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
    
    };
    for (let prop in obj) {
        console.log('key is :', prop, 'value is :', obj[prop]);
    }

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log('key is:' , prop, 'value is:', obj[prop]);
        }
    }
  
}());
