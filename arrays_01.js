(function () {
    'use strict';
    
    let arr = ['one', 'two', 'Three'];
    arr.length; // 3
    arr.push('four');
    console.log(arr);

    arr.unshift('zero'); // adding string in first 
    arr.pop(); // for removing last string 'four'
    arr.shift(); // for removing first string 'zero'
    arr.splice(0,2); // removing string range ['Three']
    arr.splice(0,3, 'a', 'b' , 'c');
    arr.reverse(); // ['four', 'Three', 'two', 'one']
    
    arr.sort();
    console.log(arr);

    console.log(['a', 'b','c'].sort(function(a, b) {
        let caselessA = a.toLowerCase(),
            caselessB = b.toLowerCase();
            if (caselessA < caselessB) {
                return -1;
            } else if (caselessA === caselessB) {
                return 0;
            } else {
                return 1;
            }
    }));
    console.log([3, 10000, 20].sort(function(a,b) {
        return a-b;
    }));

    arr.join('');  // abc
    arr.indexOf('b'); // 1

    arr.slice(1); //['b', 'c']
    arr.slice(-2); // ['a', 'b']
    arr.slice(0,-1); // ['a']


}());
